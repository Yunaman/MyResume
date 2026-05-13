import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json(
      { message: "Server email is not configured." },
      { status: 503 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, subject, message } = body;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      replyTo: `"${name.trim()}" <${email.trim()}>`,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: `${message.trim()}\n\nFrom: ${name.trim()} <${email.trim()}>`,
      html: `<p>${escapeHtml(message.trim())}</p><p>From: ${escapeHtml(name.trim())} (${escapeHtml(email.trim())})</p>`,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
