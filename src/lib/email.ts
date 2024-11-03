import nodemailer from 'nodemailer';

const domain = process.env.NEXT_PUBLIC_APP_URL;

const transforter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Email Verification',
    html: `
    <div style="text-align: center;">
      <h1 style="color: blue;">Please confirm your email</h1>
      <p style="font-size: 18px;">Please confirm your email by clicking on the link below</p>
      <p style="font-size: 18px;"><a href="${confirmLink}" style="color: red;">here</a> to confirm email.</p>
    </div>
    `,
  };

  try {
    await transforter.sendMail(mailOptions);
  } catch {
    return { error: 'Failed to send email' };
  }
};
