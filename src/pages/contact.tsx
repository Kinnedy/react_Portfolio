import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-4">I'd love to hear from you!</p>
      <ContactForm />
      <p className="mt-4">Feel free to reach out!</p>
      <Footer />
  </div>
  );
}

export default Contact;