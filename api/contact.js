import { Resend } from 'resend';

// Vercel serverless functions support standard Node.js req/res
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, surname } = req.body;

    // Honeypot check - reject if filled
    if (surname) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Resend with env vars
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error('Missing configuration variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const resend = new Resend(resendApiKey);

    // Send the email
    const data = await resend.emails.send({
      from: 'Fantasy Closets Contact Form <onboarding@resend.dev>', // Free tier Resend usually requires onboarding@resend.dev or verified domain
      to: contactEmail,
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
