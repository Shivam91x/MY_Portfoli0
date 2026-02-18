import React from "react";

export default function WhyHireMe() {
  return (
    <section className="mx-auto my-20 max-w-8xl px-6">
      <div className="relative overflow-hidden h-100 rounded-3xl bg-gray-110 p-2 md:p-12">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          
          {/* Left: Image */}
          <div className="relative flex justify-center md:justify-start">

            {/* Dummy Image */}
            <img
              src="./demo.png"
              alt="Why hire me"
              className="relative z-10 h-[360px] w-auto rounded-2xl object-cover md:h-[320px]"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-5">
            <h2 className="font-[var(--font-heading)] text-3xl text-gray-900 md:text-4xl">
              Why <span className="text-orange-500">Hire me?</span>
            </h2>

            <p className="max-w-xl text-gray-600">
              I build clean, scalable frontend applications with a strong focus
              on performance, usability, and maintainable component architecture.
              I collaborate closely with designers and backend engineers to ship
              high-quality products.
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
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

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-black border rounded-3xl shadow-lg transition hover:bg-orange-600 hover:text-white"
              >
                Hire me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
