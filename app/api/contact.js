// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,   // sender
      to: process.env.EMAIL_USER,     // your email
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
