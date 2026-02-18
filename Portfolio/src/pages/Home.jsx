import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Hello */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-lg border border-gray-900 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            Hello!
            <span className="text-orange-500">👋</span>
          </span>
        </div>

        {/* Headline */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            I’m{" "}
            <span className="text-orange-500">
              Shivam<span className="text-gray-900">,</span>
            </span>{" "}
            <br className="hidden sm:block" />
            Frontend Developer
          </h1>
        </div>

        {/* Main Grid */}
        <div className="relative mt-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-3">
          {/* Left Quote */}
          <div className="hidden lg:block">
            <div className="max-w-xs rounded-xl bg-white p-4 text-sm text-gray-700 shadow-md">
              <p className="italic">
                “Shivam’s frontend work ensures our product’s success. Highly
                recommended.”
              </p>
              <p className="mt-2 font-medium text-gray-900">— Client Review</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative flex items-end justify-center">
            {/* Orange Half Circle */}
           <div className="absolute bottom-0 h-[380px] w-[380px] rounded-t-full bg-orange-200 sm:h-[400px] sm:w-[400px] lg:h-[520px] lg:w-[520px] xl:h-[580px] xl:w-[580px]" />

            {/* Dummy Image */}
            <img
              src="demo.png"
              alt="Profile"
              className="relative z-10 h-[420px] sm:h-[440px] lg:h-[560px] xl:h-[620px] object-contain"
            />

            {/* CTA Buttons */}
            <div className="absolute bottom-4 z-20 flex gap-3">
              <button className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:bg-orange-600">
                Portfolio ↗
              </button>
              <button className="rounded-full border border-gray-300 bg-white/70 px-5 py-2.5 text-sm font-medium text-gray-900 backdrop-blur transition hover:bg-gray-100">
                Hire me
              </button>
            </div>
          </div>

          {/* Right Experience */}
          <div className="hidden lg:flex justify-end">
            <div className="rounded-xl bg-white p-4 text-center shadow-md">
              <div className="flex items-center justify-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="mt-1 text-2xl font-bold text-gray-900">3+ Years</p>
              <p className="text-xs text-gray-500">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
