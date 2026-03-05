import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import KeyboardMirror from "../components/KeyboardMirror ";
import LaptopTypingDemo from "../components/KeyboardMirror ";
import JSPlayground from "../components/KeyboardMirror ";
import LaptopJSPlayground from "../components/KeyboardMirror ";

export default function Home() {
  return (
    <>
      {/* <LaptopJSPlayground    />  */}
      <section className="relative w-full overflow-hidden rounded-2xl ">
        <div className="bg-orange-200 rounded-full blur-[120px] opacity-40  "></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top Hello */}
          {/* <div className="flex justify-start pl-60 relative ">
          <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm transition hover:bg-slate-100">
            Hello <span className="text-orange-500 text-lg">👋</span>
          </span>
        </div> */}

          {/* Headline */}
          <div className="mt-3 text-center ">
            <h1 className="text-xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              I’m{" "}
              <span className="text-orange-500">
                Shivam<span className="text-gray-900">,</span>
              </span>
              <br className="hidden sm:block" />
              Frontend Developer
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              I build responsive, component-driven UIs with React & Tailwind,
              focused on clean UX and performance.
            </p>
          </div>

          {/* Main Grid */}
          <div className="relative mt-12 items-end ">
            {/* Center Image */}
            <div className="relative flex h-[420px] items-end justify-center sm:h-[460px] lg:h-[560px]">
              {/* Orange Half Circle */}
              <div className="absolute bottom-58 h-[100px] w-[160px] rounded-t-full rounded-b-2xl shadow-2xl bg-orange-200 sm:h-[300px] sm:w-[300px] lg:h-[180px] lg:w-[380px]" />
              <img
                src="demo.png"
                alt="Profile"
                className="relative z-10 bottom-58 h-[280px] sm:h-[320px] lg:h-[400px] object-contain drop-shadow-2xl"
              />
              {/* CTA Buttons */}
              <div className="absolute bottom-42 z-50 flex gap-3 ">
                <button
                  className="group inline-flex items-center gap-2 rounded-3xl border border-gray-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg"
                >
                  Portfolio
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  
                </button>

                <button
                  className="rounded-full cursor-pointer border border-gray-400 bg-white/60 px-5 py-2 text-sm font-medium text-gray-900 backdrop-blur transition
                          hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-00"
                >
                  Hire me
                </button>
              </div>
            </div>

            {/* Right Experience
          <div className="hidden justify-end  lg:flex">
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
    </>
  );
}
