import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-500">Frontend Developer</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Building clean, fast, and user-focused web experiences.
        </h1>
        <p className="mt-5 max-w-xl text-slate-600">
          I design and develop modern React applications for job-ready products and freelance clients, with strong
          attention to responsive UI/UX and performance.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            View Projects <FaArrowRight className="text-xs" />
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-orange-400 hover:text-orange-500"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Short Intro</h2>
        <p className="mt-4 text-slate-600">
          I specialize in React.js + Tailwind CSS and enjoy turning ideas into polished interfaces. I focus on modular
          components, scalable code, and delightful interactions that work on all devices.
        </p>
      </div>
    </section>
  );
}
