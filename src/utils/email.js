// sendEmail(formData)
// Minimal wrapper for EmailJS REST API.
// Replace the placeholders below with your actual EmailJS Service ID, Template ID,
// and Public (User) Key. For production, keep these keys in environment variables
// and don't commit them to source control.

const EMAILJS_SERVICE_ID = "service_d3mdhgn"; // e.g. service_xxx
const EMAILJS_TEMPLATE_ID = "template_5pd7qto"; // e.g. template_xxx
const EMAILJS_USER_ID = "8A_DE2qIebFup7Hgo"; // e.g. user_xxx or PUBLIC_KEY

async function sendEmail(formData) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
    throw new Error('EmailJS is not configured. Please set service/template/user IDs.');
  }

  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  const templateParams = {
    from_name: formData.name || '',
    from_email: formData.email || '',
    company: formData.company || '',
    message: formData.message || '',
  };

  const payload = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_USER_ID,
    template_params: templateParams,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();

  if (!res.ok) {
    // If the server returned a non-OK status, include the body text in the error.
    throw new Error(`Email send failed: ${res.status} ${res.statusText} - ${text}`);
  }

  // Try to parse JSON but fall back to plain text (EmailJS sometimes returns plain "OK").
  try {
    return JSON.parse(text);
  } catch (err) {
    return text;
  }
}

export { sendEmail };

/*
Usage:
import { sendEmail } from '../utils/email';
try {
  await sendEmail(formData);
  // show success
} catch (err) {
  // handle error
}

Notes:
- For development you can use EmailJS free tier. Configure service/template/public key
  in your EmailJS dashboard and replace the placeholders above. For security, don't
  commit secret keys; consider using a server-side endpoint to relay emails in
  production instead of calling EmailJS directly from the client.
*/
