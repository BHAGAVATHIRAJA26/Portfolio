require('dotenv').config();
const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Resend Configuration
const resend = new Resend(process.env.RESEND_API_KEY);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Primary endpoint for receiving form data and sending email
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bhagavathiraja.s26@gmail.com',
      subject: `Portfolio Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });
    
    console.log('Email sent successfully:', data);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Start the server if running locally
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
  });
}

// Export for Vercel Serverless
module.exports = app;
