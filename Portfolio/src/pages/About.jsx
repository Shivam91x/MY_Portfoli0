import React from "react";
import {
  FaArrowRight,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { SiMui, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export default function WhyHireMe() {
  const frontendTech = [
    { name: "React", icon: <FaReact size={14} /> },
    { name: "JavaScript", icon: <FaJsSquare size={14} /> },
    { name: "TypeScript", icon: <SiTypescript size={14} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={14} /> },
    { name: "MUI", icon: <SiMui  size={14} /> },
    { name: "HTML5", icon: <FaHtml5 size={14} /> },
    { name: "CSS3", icon: <FaCss3Alt size={14} /> },
    { name: "Git", icon: <FaGitAlt size={14} /> },
    { name: "Vite", icon: <SiVite size={14} /> },
  ];

  return (
    <section className="mb-10 w-full rounded-4xl  ">
        <div className="bg-orange-200 rounded-full blur-[120px] opacity-40  "></div>

      <div className="relative rounded-3xl p-4 md:p-10">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl px-4 py-10 sm:px-8 md:grid-cols-2 md:px-10 md:py-14">
          {/* Left: Image */}
          <div className="relative flex justify-center md:pr-8">
            <div className="relative group flex justify-center md:pr-8">
              <div className="relative flex justify-center">
                {/* Sliding Accent Layer */}
                <div className="absolute top-5 left-2 h-[440px] w-[280px] rounded-3xl bg-orange-200 transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:translate-y-2"></div>

                {/* Base Layer */}
                <div className="absolute top-20 left-12 h-[380px] w-[240px] rounded-3xl border border-orange-300 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

                {/* Image */}
                <img
                  src="/demo.png"
                  alt="Why hire me"
                  loading="lazy"
                  className="relative z-10  h-[460px] w-[300px] shadow-2xs  max-w-full rounded-2xl object-cover transition-all duration-500 group-hover:-translate-y-3"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-5">
            <h2 className="text-4xl font-semibold text-gray-900">
              Why <span className="text-orange-500">Hire me?</span>
            </h2>

            <p className="max-w-xl text-gray-500">
              I build clean, scalable frontend applications with a strong focus
              on performance, usability, and maintainable component
              architecture. I collaborate closely with designers and backend
              engineers to ship high-quality products.
            </p>

            {/* Frontend Tech Stickers */}
            <div aria-label="Frontend technologies">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
                Frontend Technologies
              </h3>
              <ul className="flex flex-wrap gap-5">
                {frontendTech.map((tech) => (
                  <li key={tech.name}>
                    <div className="relative group flex h-16 leading-loose w-16 items-center justify-center hover:-translate-y-2 transition-transform duration-300 ease-out rounded-full bg-orange-50  shadow-lg text-orange-600 shadow-sm">
                      <span className="absolute inset-0 rounded-full border border-orange-300 opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"></span>
                      <span className="absolute inset-1 rounded-full border border-orange-500 opacity-0 scale-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"></span>
                      <span className="absolute -bottom-6 text-sm opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </span>
                      <span className="relative z-10">
                        {React.cloneElement(tech.icon, { size: 28 })}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mt-2 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">1+ Year</p>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">React</p>
                <p className="text-sm text-gray-500">Primary Stack</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-3xl border border-gray-300 px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg"
              >
                Hire Me
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
