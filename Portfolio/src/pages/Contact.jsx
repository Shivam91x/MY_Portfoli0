import { useMemo, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/UI/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    return `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section className="py-12">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s work together"
        description="I’m available for frontend roles and freelance projects. Send a quick message and I’ll reply soon."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <a href="mailto:youremail@example.com" className="flex items-center gap-3 text-slate-700 hover:text-orange-500">
            <FaEnvelope /> youremail@example.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-orange-500">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-orange-500">
            <FaGithub /> GitHub
          </a>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-400"
            />
            <input
              required
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-400"
            />
          </div>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Tell me about your project"
            className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-orange-400"
          />
          <a
            href={mailtoHref}
            className="mt-4 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Send via Email
          </a>
        </form>
      </div>
    </section>
  );
}
