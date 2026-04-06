import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import KeyboardSvg from '../components/KeyboardSVG'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative w-full overflow-hidden rounded-2xl">
        <div className="bg-orange-200 rounded-full blur-[120px] opacity-40"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="flex items-center min-h-screen">

            {/* LEFT — Keyboard */}
            <div className="hidden lg:flex  flex-col w-[400px] shrink-0 items-center justify-center">
              <KeyboardSvg />
            </div>

            {/* CENTER — Main content */}
            <div className="flex-1 flex flex-col items-center text-center">

              {/* Headline */}
              <div className="mt-4">
                <h1 className="text-xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-4xl">
                  I'm{" "}
                  <span className="text-orange-500">
                    Shivam<span className="text-gray-500">,</span>
                  </span>
                  <br className="hidden sm:block" />
                  Frontend Developer
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                  I build responsive, component-driven UIs with React & Tailwind,
                  focused on clean UX and performance.
                </p>
              </div>

              {/* Character Image */}
              <div className="relative flex h-[420px] items-end justify-center sm:h-[460px] lg:h-[500px] w-full">
                <div className="absolute bottom-30 h-[100px] w-[160px] rounded-t-full rounded-b-2xl shadow-2xl bg-orange-200 sm:h-[300px] sm:w-[300px] lg:h-[180px] lg:w-[380px]" />
                <img
                  src="HomeImg.webp"
                  alt="Profile"
                  className="relative z-10 bottom-30 h-[280px] sm:h-[320px] lg:h-[400px] object-contain drop-shadow-2xl"
                />
                {/* CTA Buttons */}
                <div className="absolute bottom-12 z-50 flex gap-3">
                  <button onClick={() => navigate("/contact")} className="group inline-flex items-center gap-2 rounded-3xl border border-gray-400 px-6 py-3 font-medium text-black shadow-2xl transition-all duration-300 bg-slate-100 cursor-pointer hover:bg-orange-600 hover:text-white hover:shadow-lg">
                    Connect
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                  <button onClick={() => navigate("/resume")} className="rounded-full cursor-pointer border border-gray-400 bg-white/60 px-5 py-2 text-sm font-medium text-gray-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-00">
                    Resume
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT — Dummy, SAME width as left */}
            <div className="hidden lg:block w-[400px] shrink-0" />

          </div>

        </div>
      </section>
    </>
  );
}