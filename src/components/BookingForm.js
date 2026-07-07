import React, { useState } from "react";
import "../styles/EnrollmentForm.css";
import { submitToFormSubmit } from "../utils/formSubmit";
import {
  INQUIRY_TYPES,
  EVENT_TYPES,
  MELAM_TYPES,
  REFERRAL_SOURCES,
} from "../data/bookingOptions";

const emptyReferrals = () =>
  REFERRAL_SOURCES.reduce((acc, { key }) => ({ ...acc, [key]: false }), {});

const BookingForm = ({
  mode = "event",
  course = null,
  defaultInquiryType = "wedding",
  onClose,
  compact = false,
}) => {
  const isCourse = mode === "course";
  const [formData, setFormData] = useState({
    inquiryType: isCourse ? "course" : defaultInquiryType,
    name: "",
    age: "",
    phoneNumber: "",
    email: "",
    location: "",
    venue: "",
    eventDate: "",
    eventType: isCourse ? "" : "Groom Entry",
    melamType: "Not sure — recommend for me",
    guestCount: "",
    message: "",
    referralSources: emptyReferrals(),
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      referralSources: { ...prev.referralSources, [name]: checked },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.location) {
      setFormError("Please fill all required fields");
      return;
    }

    if (isCourse && !formData.age) {
      setFormError("Please enter your age for course enrollment");
      return;
    }

    if (!isCourse && formData.inquiryType !== "course" && !formData.eventDate) {
      setFormError("Please enter your event date");
      return;
    }

    const hasReferral = Object.values(formData.referralSources).some(Boolean);
    if (!hasReferral) {
      setFormError("Please select how you heard about us");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      await submitToFormSubmit({
        mode: isCourse ? "course" : formData.inquiryType,
        course: course ? { name: course.name, id: course.id } : null,
        formData,
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        error.message || "An error occurred. Please try again or WhatsApp us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    const successTitle = isCourse
      ? "You're on the list!"
      : "Booking request received!";
    const successBody = isCourse
      ? `Thank you for enrolling in ${course?.name}. Our team will contact you shortly to confirm your slot and class schedule.`
      : "Thank you for your inquiry. We will contact you shortly with availability and a custom quote for your event.";

    return (
      <div className="enrollment-form-container">
        <div className="enrollment-success">
          <div className="success-icon" aria-hidden="true">✓</div>
          <h2>{successTitle}</h2>
          <p>{successBody}</p>
          <button type="button" className="form-button" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    );
  }

  const showEventFields = !isCourse && formData.inquiryType !== "course";

  return (
    <div className={`enrollment-form-container${compact ? " enrollment-compact" : ""}`}>
      <div className="enrollment-header">
        <span className="enrollment-badge">
          {isCourse ? "Course Enrollment" : "Event Booking"}
        </span>
        <h2>
          {isCourse ? `Join ${course?.name}` : "Book Chenda Melam"}
        </h2>
        <p className="enrollment-subtitle">
          {isCourse
            ? "Fill in your details and we'll reach out to confirm your enrollment."
            : "Wedding, temple festival, corporate event, or course inquiry — tell us about your event."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="enrollment-form" noValidate>
        {formError && (
          <div className="form-error" role="alert">
            {formError}
          </div>
        )}

        {!isCourse && (
          <div className="form-group">
            <label htmlFor="inquiryType">Inquiry Type *</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
            >
              {INQUIRY_TYPES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{isCourse ? "Student Name *" : "Your Name *"}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </div>

          {isCourse && (
            <div className="form-group">
              <label htmlFor="age">Age *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
                min="5"
                max="100"
              />
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone / WhatsApp *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="10-digit mobile"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com (optional)"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">{showEventFields ? "City / Area *" : "Location *"}</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder={showEventFields ? "e.g. Anna Nagar, Chennai" : "City / area"}
              required
            />
          </div>

          {showEventFields && (
            <div className="form-group">
              <label htmlFor="eventDate">Event Date *</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        {showEventFields && (
          <>
            <div className="form-group">
              <label htmlFor="venue">Venue / Hall Name</label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Marriage hall, hotel, or venue name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="melamType">Melam Type</label>
                <select
                  id="melamType"
                  name="melamType"
                  value={formData.melamType}
                  onChange={handleChange}
                >
                  {MELAM_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guestCount">Expected Guest Count</label>
              <input
                type="text"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="Approximate number of guests"
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="message">
            {showEventFields ? "Additional Details" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              showEventFields
                ? "Timing preferences, multiple events, special requests..."
                : "Any questions or preferred class timing..."
            }
            rows="3"
          />
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-heading">How did you hear about us? *</label>
          <div className="checkbox-options">
            {REFERRAL_SOURCES.map(({ key, label }) => (
              <label key={key} className="checkbox-pill">
                <input
                  type="checkbox"
                  name={key}
                  checked={formData.referralSources[key]}
                  onChange={handleCheckboxChange}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-actions">
          {onClose && (
            <button type="button" className="cancel-button" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </button>
          )}
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting
              ? "Submitting..."
              : isCourse
                ? "Submit Enrollment"
                : "Submit Booking Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
