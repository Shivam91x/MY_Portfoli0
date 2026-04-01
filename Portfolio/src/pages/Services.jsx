import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaTools,
  FaServer,
  FaHandshake,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-4xl border border-white/3 p-4 sm:p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:shadow-orange-300/40">
        <div className="bg-orange-200 rounded-full blur-[120px] opacity-40"></div>

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 opacity-0 blur transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl bg-orange-100/80 text-orange-600">
          {icon}
        </div>

        <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mb-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-orange-200/70 bg-orange-50/80 px-2 sm:px-2.5 py-0.5 text-xs text-orange-700"
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
      className="relative mb-4 min-h-screen bg-contain px-3 py-12 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: "url('/ServiceBg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 rounded-4xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-14 text-center text-black">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My Services
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-black/80">
            Frontend · Freelancing · API Integration
          </p>
        </div>

        {/* Split Sections */}
        <div className="grid gap-8 md:gap-12 lg:gap-14 lg:grid-cols-2">
          {/* For Companies */}
          <div>
            <h2 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold text-gray-900 border-b pl-2 sm:pl-4 border-gray-300">
              I Do
            </h2>
            <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {jobServices.map((s) => (
                <GlassCard key={s.title} {...s} />
              ))}
            </div>
          </div>

          {/* For Freelancing */}
          <div>
            <h2 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold text-gray-900 border-b pl-2 sm:pl-4 border-gray-300">
              Also Offering
            </h2>
            <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {freelanceServices.map((s) => (
                <GlassCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 md:mt-16 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center cursor-pointer rounded-full bg-orange-500 px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg transition hover:bg-orange-600"
          >
            Let’s Build Something
          </button>
        </div>
      </div>
    </section>
  );
}