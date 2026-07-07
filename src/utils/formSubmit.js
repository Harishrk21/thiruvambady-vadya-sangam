import { CONTACT } from "../data/contactInfo";
import { INQUIRY_TYPES, REFERRAL_SOURCES } from "../data/bookingOptions";

const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`;

const formatReferrals = (referralSources = {}) => {
  const selected = REFERRAL_SOURCES.filter(({ key }) => referralSources[key]).map(
    ({ label }) => label
  );
  return selected.length ? selected.join(", ") : "None selected";
};

const inquiryLabel = (value) =>
  INQUIRY_TYPES.find((t) => t.value === value)?.label || value || "—";

const buildPayload = ({ mode, course, formData }) => {
  const isCourse = mode === "course" || formData.inquiryType === "course";

  const subject = isCourse
    ? `Course Enrollment: ${course?.name || "General"} — ${formData.name}`
    : `${inquiryLabel(formData.inquiryType)}: ${formData.eventType || "Chenda Melam"} — ${formData.location}`;

  const payload = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _cc: CONTACT.formCcEmail,
    "Form Type": isCourse ? "Course Enrollment" : "Event / Wedding Booking",
    Name: formData.name,
    "Phone / WhatsApp": formData.phoneNumber,
    Location: formData.location,
    "How did you hear about us": formatReferrals(formData.referralSources),
    "Submitted From": typeof window !== "undefined" ? window.location.href : "",
  };

  if (!isCourse) {
    payload["Inquiry Type"] = inquiryLabel(formData.inquiryType);
  }

  if (isCourse && course?.name) {
    payload.Course = course.name;
  }

  if (formData.age) payload.Age = formData.age;
  if (formData.email) {
    payload.Email = formData.email;
    payload._replyto = formData.email;
  }
  if (formData.venue) payload.Venue = formData.venue;
  if (formData.eventDate) payload["Event Date"] = formData.eventDate;
  if (formData.eventType) payload["Event Type"] = formData.eventType;
  if (formData.melamType) payload["Melam Type"] = formData.melamType;
  if (formData.guestCount) payload["Guest Count"] = formData.guestCount;
  if (formData.message) payload["Message / Details"] = formData.message;

  return payload;
};

/**
 * Submit booking/enrollment form via FormSubmit.co
 * Primary: CONTACT.email · CC: CONTACT.formCcEmail
 */
export const submitToFormSubmit = async ({ mode, course, formData }) => {
  const payload = buildPayload({ mode, course, formData });

  const response = await fetch(FORM_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    // FormSubmit may return non-JSON on some errors
  }

  if (!response.ok || (data.success !== true && data.success !== "true")) {
    throw new Error(data.message || "Failed to submit form. Please try WhatsApp.");
  }

  return { success: true, message: "Submitted successfully" };
};
