import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:shivam@email.com?subject=Contact from Portfolio&body=
      Name: ${form.name}%0A
      Email: ${form.email}%0A
      Message: ${form.message}`;

    window.location.href = mailto;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Let’s Connect
          </h1>
          <p className="mt-3 text-gray-600">
            Open to frontend roles, collaborations, and freelance work.
          </p>
        </div>
    
        {/* Contact Cards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <FaEnvelope  />, label: "Email", href: "mailto:shivam@email.com" },
            { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
            { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-gray-200 p-4 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-orange-500">{item.icon}</span>
              <span className="font-medium text-gray-800">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-gray-50 p-6"
        >
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Send a Message
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-4 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-3 text-sm text-green-600">
              Thanks! Your email client should open now.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
