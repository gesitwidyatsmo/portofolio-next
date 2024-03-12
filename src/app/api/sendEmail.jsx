import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Konfigurasi transporter nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'yourgmail@gmail.com', // Ganti dengan email Anda
        pass: 'yourpassword', // Ganti dengan password email Anda
      },
    });

    try {
      // Kirim email
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'yourgmail@gmail.com', // Ganti dengan email tujuan Anda
        subject,
        text: message,
      });

      console.log('Email terkirim:', info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Gagal mengirim email:', error);
      res.status(500).json({ success: false, error: 'Gagal mengirim email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
