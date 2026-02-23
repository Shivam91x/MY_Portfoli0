import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="min-h-screen  mb-4 rounded-2xl shadow-2xs  bg-blue-50 px-4 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Shivam Yadav
            </h1>
            <p className="mt-2 text-gray-600">
              Frontend Developer · React · Tailwind · UI Engineering
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <FaDownload />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "React, Tailwind, MUI",
            "API Integration & Auth",
            "Admin Dashboards",
            "Enterprise UI (Medicef eLogbook)",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-10 lg:col-span-2">
            {/* Experience */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">
                    Frontend Developer Intern — VidyaGxP
                  </h3>
                  <p className="text-sm text-gray-500">Sep 2025 – Present</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                    <li>
                      Built enterprise-grade UI for Medicef eLogbook using React &
                      Tailwind.
                    </li>
                    <li>
                      Implemented role-based access, API integrations, and admin
                      dashboards.
                    </li>
                    <li>
                      Improved UX consistency and component reusability.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Projects
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">
                    Medicef eLogbook (Enterprise App)
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    React-based enterprise application with auth, role-based
                    access, activity tracking, and admin workflows.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900">
                    E-commerce (FakeStore API)
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Product listing, search, pagination, cart flows using React
                    and Tailwind.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Skills */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Skills</h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: "React", level: 85 },
                  { label: "Tailwind CSS", level: 80 },
                  { label: "JavaScript", level: 75 },
                  { label: "API Integration", level: 80 },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-gray-700">{s.label}</span>
                      <span className="text-xs text-gray-500">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-orange-500"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Education
              </h2>
              <div className="rounded-xl border border-gray-200 p-5 text-sm text-gray-700">
                Bachelor’s Degree — Computer Science (or your degree)
              </div>
            </section>

            {/* PDF Preview (Optional) */}
            <section className="hidden lg:block">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Resume (PDF)
              </h2>
              <div className="overflow-hidden rounded-xl border">
                <iframe
                  src="/resume.pdf"
                  title="Resume PDF"
                  className="h-[420px] w-full"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
