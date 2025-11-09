import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create Nodemailer transporter (Gmail recommended with App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, // **Use an App Password** if using Gmail + 2FA
  },
});

// Optional: verify transporter once (useful during dev)
async function verifyTransporter() {
  try {
    await transporter.verify();
    console.log('Nodemailer transporter verified');
  } catch (err) {
    console.error('Nodemailer verification failed:', err);
  }
}
verifyTransporter();

// Helper: escape HTML for safe insertion into email html
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Telegram helper
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, { chat_id, text: message });
    return !!res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// Email template (safe, uses escaped text)
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1);">
      <h2 style="color:#007BFF;margin-top:0">New Message Received</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left:4px solid #007BFF;padding-left:10px;margin-left:0;">
        ${escapeHtml(userMessage).replace(/\n/g, '<br>')}
      </blockquote>
      <p style="font-size:12px;color:#888;">Reply-to is set to the sender's email.</p>
    </div>
  </div>
`;

// Send email
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: `${name} <${process.env.EMAIL_ADDRESS}>`, // show your inbox as sender but include name
    to: process.env.EMAIL_ADDRESS,
    subject: `New message from ${name}`,
    text: `New message from ${name} <${email}>:\n\n${userMessage}`,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error);
    return false;
  }
}

function validatePayload(payload) {
  if (!payload) return 'No payload provided';
  const { name, email, message } = payload;
  if (!name || typeof name !== 'string' || name.trim().length < 2) return 'Invalid name';
  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) return 'Invalid email';
  if (!message || typeof message !== 'string' || message.trim().length < 5) return 'Message too short';
  return null;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const validationError = validatePayload(payload);
    if (validationError) {
      return NextResponse.json({ success: false, message: validationError }, { status: 400 });
    }

    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    // Prepare plain text message for telegram
    const telegramText = `New message from ${name}\nEmail: ${email}\n\n${userMessage}`;

    // Send Telegram if configured (optional)
    let telegramSuccess = true;
    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, telegramText);
    }

    // Send email
    const emailSuccess = await sendEmail(payload);

    if (emailSuccess && telegramSuccess) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } else if (!emailSuccess && telegramSuccess) {
      return NextResponse.json({ success: false, message: 'Email failed but telegram ok' }, { status: 500 });
    } else if (emailSuccess && !telegramSuccess) {
      return NextResponse.json({ success: true, message: 'Email sent but telegram failed' }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Both email and telegram failed' }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, message: 'Server error occurred' }, { status: 500 });
  }
}
