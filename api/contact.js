const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = str =>
  str.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const { name, email, message, company } = req.body ?? {};

  // Honeypot field - real visitors never fill it, bots usually do.
  if (company) {
    res.status(200).json({ ok: true });
    return;
  }

  if (
    typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' ||
    !name.trim() || !email.trim() || !message.trim() ||
    name.length > 200 || email.length > 200 || message.length > 5000 ||
    !EMAIL_RE.test(email)
  ) {
    res.status(400).json({ error: 'Invalid input.' });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    res.status(500).json({ error: 'Email sending is not configured.' });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL || 'hamzaabhutta@gmail.com';

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to,
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
              `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
              `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!resendRes.ok) {
      console.error('Resend error:', await resendRes.text());
      res.status(502).json({ error: 'Failed to send email.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Unexpected server error.' });
  }
}
