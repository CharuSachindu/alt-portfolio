import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const host = process.env.SMTP_HOST?.trim();
    const port = process.env.SMTP_PORT?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();
    const recipient = process.env.CONTACT_RECIPIENT?.trim();
    const fromEmail = process.env.MAIL_FROM?.trim();

    if (!host || !port || !user || !pass || !recipient || !fromEmail) {
      return new Response(JSON.stringify({ error: "SMTP configuration missing on server" }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const subject = `Portfolio contact from ${firstName || ""} ${lastName || ""}`;
    const body = `
      Name: ${firstName || ""} ${lastName || ""}\n
      Email: ${email}\n
      Phone: ${phone || ""}\n
      Message:\n
      ${message}
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: recipient,
      replyTo: email,
      subject,
      text: body,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
