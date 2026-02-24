import React from "react";

export default function WhyHireMe() {
  return (
    <section className="h-screen  w-full bg-slate-100 mb-22 rounded-4xl ">
      <div className="relative  h-100 rounded-3xl bg-gray-110 p-2 md:p-12">
        <div className=" px-10 py-20 rounded-2xl grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          
          {/* Left: Image */}
          <div className="relative flex justify-center pr-8 ">

            {/* Dummy Image */}
           <div className="relative flex justify-center pr-8">
            <div className="absolute mt-28 rounded-4xl h-[260px] w-[100px] bg-orange-300 sm:h-[300px] sm:w-[300px] lg:h-[300px] lg:w-[220px]" />
              <img
                src="./demo.png"
                alt="Why hire me"
                className="relative z-10 h-[410px] w-[300px] max-w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-3 " >
            <h2 className=" text-4xl text-gray-900 font-semibold">
              Why <span className="shadow-black text-orange-500 ">Hire me?</span>
            </h2>

            <p className="max-w-xl text-gray-500">
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
                className="inline-flex items-center px-6 py-3 hover:border-2 hover:border-gray-300 text-black border rounded-3xl shadow-3xl transition hover:bg-orange-600 hover:text-white"
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
