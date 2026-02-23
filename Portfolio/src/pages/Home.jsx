import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-slate-50  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Hello */}
        {/* <div className="flex justify-start pl-60 relative ">
          <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:bg-slate-100">
            Hello <span className="text-orange-500 text-lg">👋</span>
          </span>
        </div> */}

        {/* Headline */}
        <div className="mt-3 text-center ">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            I’m{" "}
            <span className="text-orange-500">
              Shivam<span className="text-gray-900">,</span>
            </span>
            <br className="hidden sm:block" />
            Frontend Developer
          </h1>
        </div>

        {/* Main Grid */}
        <div className="relative mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-3">
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
          <div className="relative flex h-[420px] items-end justify-center sm:h-[460px] lg:h-[560px]">
            {/* Orange Half Circle */}
            <div className="absolute bottom-40 h-[260px] w-[260px] rounded-t-full bg-orange-200 sm:h-[300px] sm:w-[300px] lg:h-[420px] lg:w-[420px]" />
            <img
              src="demo.png"
              alt="Profile"
              className="relative z-10 bottom-36 h-[280px] sm:h-[320px] lg:h-[420px] object-contain drop-shadow-2xl"
            />
            {/* CTA Buttons */}
            <div className="absolute bottom-26 z-50 flex gap-3">
              <button className="rounded-full cursor-pointer hover:scale-115   border-gray-400 bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-orange-600">
                Portfolio↗
              </button>
              <button className="rounded-full cursor-pointer border  border-gray-400  bg-white/60 px-5 py-2 text-sm font-medium text-gray-900 backdrop-blur transition">
                Hire me
              </button>
            </div>
          </div>

          {/* Right Experience
          <div className="hidden justify-end lg:flex">
            <div className="rounded-xl bg-white p-4 text-center shadow-md">
              <div className="flex items-center justify-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="mt-1 text-2xl font-bold text-gray-900">3+ Years</p>
              <p className="text-xs text-gray-500">Experience</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}