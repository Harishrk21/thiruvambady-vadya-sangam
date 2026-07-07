const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const RECIPIENT_EMAIL = 'vineeshkalyanaraman5@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harishradhakrishnan2001@gmail.com',
    pass: 'ssiwtjazojsleqad'
  }
});

const formatReferrals = (referralSources = {}) =>
  Object.entries(referralSources)
    .filter(([, checked]) => checked)
    .map(([source]) => source)
    .join(', ') || 'None selected';

const buildInquiryEmail = ({ mode, course, formData }) => {
  const isCourse = mode === 'course';
  const referrals = formatReferrals(formData.referralSources);

  if (isCourse) {
    return {
      subject: `New Course Enrollment: ${course?.name || 'General'}`,
      html: `
        <h2>Course Enrollment Request</h2>
        <p><strong>Course:</strong> ${course?.name || 'Not specified'}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Age:</strong> ${formData.age || '—'}</p>
        <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
        <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Message:</strong> ${formData.message || '—'}</p>
        <p><strong>Referral:</strong> ${referrals}</p>
      `,
    };
  }

  return {
    subject: `New ${formData.inquiryType || 'event'} Booking: ${formData.eventType || 'Chenda Melam'} — ${formData.location}`,
    html: `
      <h2>Event / Wedding Booking Request</h2>
      <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
      <p><strong>City / Area:</strong> ${formData.location}</p>
      <p><strong>Venue:</strong> ${formData.venue || '—'}</p>
      <p><strong>Event Date:</strong> ${formData.eventDate || '—'}</p>
      <p><strong>Event Type:</strong> ${formData.eventType || '—'}</p>
      <p><strong>Melam Type:</strong> ${formData.melamType || '—'}</p>
      <p><strong>Guest Count:</strong> ${formData.guestCount || '—'}</p>
      <p><strong>Details:</strong> ${formData.message || '—'}</p>
      <p><strong>Referral:</strong> ${referrals}</p>
    `,
  };
};

const sendInquiryMail = async (payload) => {
  const { subject, html } = buildInquiryEmail(payload);
  await transporter.sendMail({
    from: 'harishradhakrishnan2001@gmail.com',
    to: RECIPIENT_EMAIL,
    subject,
    html,
  });
};

app.post('/api/inquiry', async (req, res) => {
  try {
    const { mode, course, formData } = req.body;
    if (!formData?.name || !formData?.phoneNumber) {
      return res.status(400).json({ success: false, message: 'Name and phone are required' });
    }
    await sendInquiryMail({ mode, course, formData });
    res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Error sending inquiry email:', error);
    res.status(500).json({ success: false, message: 'Failed to submit inquiry' });
  }
});

app.post('/api/enroll', async (req, res) => {
  try {
    const { course, formData } = req.body;
    const normalized = {
      name: formData.studentName || formData.name,
      age: formData.age,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      location: formData.location,
      message: formData.message || '',
      referralSources: formData.referralSources,
    };
    await sendInquiryMail({ mode: 'course', course, formData: normalized });
    res.status(200).json({ success: true, message: 'Enrollment submitted successfully' });
  } catch (error) {
    console.error('Error sending enrollment email:', error);
    res.status(500).json({ success: false, message: 'Failed to submit enrollment' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: 'harishradhakrishnan2001@gmail.com',
      to: RECIPIENT_EMAIL,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get(/^\/(?!api\/).*/, (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
