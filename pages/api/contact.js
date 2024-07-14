import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    return res.status(500).json({ message: "Missing email credentials." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: "tatiana.sanchez.sanin@gmail.com",
      subject: `Message from ${name} - Portfolio Contact`,
      text: `${message}`,
    });

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Could not send email." });
  }
}
