import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaTools,
  FaServer,
  FaHandshake,
} from "react-icons/fa";

const jobServices = [
  {
    icon: <FaCode size={22} />,
    title: "Frontend Development",
    desc: "Scalable, maintainable UIs with React, Tailwind and modern patterns.",
    tags: ["React", "Tailwind", "SPA"],
  },
  {
    icon: <FaTools size={22} />,
    title: "Admin Dashboards",
    desc: "Enterprise dashboards with role-based access, tables and workflows.",
    tags: ["RBAC", "Tables", "Forms"],
  },
  {
    icon: <FaRocket size={22} />,
    title: "Performance Optimization",
    desc: "Improve load time, code splitting and runtime performance.",
    tags: ["Vite", "Lazy Load", "Perf"],
  },
];

const freelanceServices = [
  {
    icon: <FaPaintBrush size={22} />,
    title: "Website Development",
    desc: "Responsive websites for startups, brands and small businesses.",
    tags: ["Landing Page", "Responsive"],
  },
  {
    icon: <FaHandshake size={22} />,
    title: "Frontend Fixes & Enhancements",
    desc: "Bug fixes, UI polish and feature additions in existing projects.",
    tags: ["Bug Fix", "UI Polish"],
  },
  {
    icon: <FaServer size={22} />,
    title: "API Integration",
    desc: "REST APIs, auth flows and dashboard integrations.",
    tags: ["REST", "Auth", "Dashboards"],
  },
];

function GlassCard({ icon, title, desc, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-4xl border border-white/3  p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:shadow-orange-300/40">
        <div className="bg-orange-200 rounded-full blur-[120px] opacity-40  "></div>

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 opacity-0 blur transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600">
          {icon}
        </div>

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mb-3 text-sm text-gray-700 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-orange-200/70 bg-orange-50/80 px-2.5 py-0.5 text-xs text-orange-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      className="relative mb-4 min-h-screen bg-contain  px-4 py-16 sm:px-8 lg:px-12"
      // 👇 Tum yahan apni background image laga dena
      style={{ backgroundImage: "url('/ServiceBg.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute rounded-4xl rounded-br-full inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 text-center text-black">
          <h1 className="text-3xl font-bold">
            Services
          </h1>
          <p className="mt-2 text-sm text-black/80">
            Frontend · Freelancing · API Integration
          </p>
        </div>

        {/* Split Sections */}
        <div className="grid gap-14 lg:grid-cols-2">
          {/* For Companies */}
          <div>
            <h2 className="mb-5 text-xl font-semibold text-gray/90 border-b  pl-4  border-gray-300">
             I Do
            </h2>
             <div className="grid gap-5 sm:grid-cols-2">
              {jobServices.map((s) => (
                <GlassCard key={s.title} {...s} />
              ))}
            </div>
          </div>

          {/* For Freelancing */}
          <div>
            <h2 className="mb-5 text-xl font-semibold text-black">
              .
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {freelanceServices.map((s) => (
                <GlassCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-orange-500 px-7 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-orange-600"
          >
            Let’s Build Something
          </a>
        </div>
      </div>
    </section>
  );
}