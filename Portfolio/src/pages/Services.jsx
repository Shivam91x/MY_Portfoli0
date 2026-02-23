import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "UI / UX Design",
    image: "/service-uiux.png", // replace with your images
  },
  {
    title: "Web Design",
    image: "/service-web.png",
  },
  {
    title: "Landing Page",
    image: "/service-landing.png",
  },
];

export default function MyServices() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0b0b0f] px-6 py-16 sm:px-10">


      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-orange-400/30 blur-[120px]" />

      {/* Header */}
      <div className="relative z-10 mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          20 <span className="text-orange-500">lorem</span>
        </h2>
        <p className="max-w-xl text-sm text-gray-400">
          I design and build high-quality web interfaces with strong focus on UX,
          performance, and scalability.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex gap-6 overflow-x-auto pb-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative w-[280px] shrink-0 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {service.title}
            </h3>

            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
            </div>

            {/* Floating arrow button */}
            <button className="absolute -bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f172a] text-white shadow-lg transition hover:scale-110 hover:bg-orange-500">
              <FaArrowRight  />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination dots (UI only) */}
      <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
        <span className="h-2 w-6 rounded-full bg-orange-500"></span>
        <span className="h-2 w-2 rounded-full bg-gray-600"></span>
        <span className="h-2 w-2 rounded-full bg-gray-600"></span>
      </div>
    </section>
  );
}
