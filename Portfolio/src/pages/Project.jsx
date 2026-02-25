
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Medicef eLogbook",
    desc: "Enterprise-grade eLogbook with role-based access, admin workflows, session tracking and dashboards.",
    tech: ["React", "Tailwind", "RBAC", "API"],
    image: "/projectImgs/medicef.png", // optional, tum apni image laga dena
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Store",
    desc: "Frontend e-commerce app with product listing, search, pagination and cart using FakeStore/DummyJSON API.",
    tech: ["React", "Tailwind", "API", "Cart"],
    image: "/projectImgs/medicef.png",// Add your image path here
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Tailwind and modern UI interactions.",
    tech: ["React", "Tailwind", "UI"],
    image: "/projectImgs/portfolio.png",
    live: "#",
    github: "#",
  },
  {
    title: "Repairing Website",
    desc: "created a highly responsive and user-friendly repairing website.",
    tech: ["React", "Tailwind", "UI", "GSAP"],
    image: "/projectImgs/repairing.png",
    live: "#",
    github: "#",
  },
];

function ProjectCard({ p }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-orange-200 bg-syan-200  shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            Project Preview
          </div>
        )}

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition group-hover:opacity-100">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-900"
          >
            Live
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-medium text-white"
          >
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {p.title}
        </h3>
        <p className="mb-3 text-sm text-gray-600 leading-relaxed">
          {p.desc}
        </p>

        {/* Tech stack */}
        <div className="mb-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs text-orange-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links (mobile visible) */}
        <div className="flex gap-3 sm:hidden">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-orange-600"
          >
            <FaExternalLinkAlt size={12} /> Live
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-gray-700"
          >
            <FaGithub size={12} /> Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Projects
          </h1>
          <p className="mt-2 text-gray-600">
            A few things I’ve built recently
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
          >
            Want to build something similar?
          </a>
        </div>
      </div>
    </section>
  );
}