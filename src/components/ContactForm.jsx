import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim data formulir ke fungsi server-side
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email berhasil dikirim!');
      // Bersihkan formulir setelah pengiriman berhasil
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      alert('Gagal mengirim email. Silakan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nama:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="subject">Subjek:</label>
        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="message">Pesan:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
};

export default ContactForm;
