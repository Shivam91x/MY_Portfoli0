import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmojiPeople, MdOutlineMailLock } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const presets = {
    hire: "Hi Shivam, I’m interested in hiring you for a frontend project. ",
    project: "Hi Shivam, I have a project idea and would like to discuss details. ",
    hi: "Hi Shivam, just wanted to say hello! ",
  };

  const handlePreset = (type) => {
    setForm((prev) => ({
      ...prev,
      message: presets[type],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:yourmail@gmail.com?subject=Contact from Portfolio&body=
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

    window.location.href = mailto;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-slate-50 to-blue-50 px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        {/* Left Panel */}
        <div className="flex flex-col justify-between rounded-3xl border border-orange-100 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Let’s Work Together
            </h1>
            <p className="mt-3 text-gray-600">
              Open to frontend roles, collaborations, and freelance projects.
            </p>

            {/* Availability */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for new projects
            </div>

            {/* Contact Methods */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <FaEnvelope />, label: "Email", href: "mailto:yourmail@gmail.com" },
                { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: <FaGithub />, label: "GitHub", href: "https://github.com" },
                { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-100">
                    {item.icon}
                  </span>
                  <span className="font-medium text-gray-800">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Direct Email */}
            <p className="mt-6 text-sm text-gray-600">
              Prefer email? Reach me at{" "}
              <a
                href="mailto:yourmail@gmail.com"
                className="font-medium text-orange-600 hover:underline"
              >
                yourmail@gmail.com
              </a>
            </p>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            Based in India · Open to remote opportunities
          </p>
        </div>

        {/* Right Panel (Form) */}
        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Send me a message
          </h2>
          <p className="mb-5 text-sm text-gray-600">
            I usually respond within 24 hours.
          </p>

          {/* Context Buttons */}
          <div className="mb-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handlePreset("hire")}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 transition hover:bg-orange-100"
            >
              Hire me
            </button>
            <button
              type="button"
              onClick={() => handlePreset("project")}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 transition hover:bg-orange-100"
            >
              Project inquiry
            </button>
            <button
              type="button"
              onClick={() => handlePreset("hi")}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 transition hover:bg-orange-100"
            >
              Just saying hi
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
              <MdEmojiPeople color="orange" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-11  py-3 text-sm outline-none transition focus:border-orange-400 "
                required
              />  
              </div>
              <div className="relative">
                <MdOutlineMailLock color="orange" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-11 py-3 text-sm outline-none transition focus:border-orange-400 "
                    required
                  />
              </div>
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 "
              required
            />

            <button
              type="submit"
              className="inline-flex cursor-pointer w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Send Message
            </button>

            {submitted && (
              <p className="pt-2 text-center text-sm text-green-600">
                Thanks! Your email client should open now 🙂
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}