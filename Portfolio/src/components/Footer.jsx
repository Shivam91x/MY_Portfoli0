import { FaArrowRight, FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";

import React from "react";

export default function Footer() {



  const handleOnChange = () => {
    
  }
  return (
    <footer className="w-full rounded-t-4xl bg-[#1f1f1f]">
      {/* Outer full-width background */}
      <div className="w-full rounded-t-2xl px-4 sm:px-6 lg:px-6 py-8">
        {/* Inner container */}
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#242424] px-6 py-10 text-white md:px-8">
          {/* Top CTA */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let’s Connect there
            </h2>
            <button className="group inline-flex items-center gap-2 rounded-3xl border border-gray-400 px-6 py-3 font-medium bg-orange-50 cursor-pointer text-black transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg">
              Hire me
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-gray-600/60" />

          {/* Main Grid */}
          <div className="flex  justify-between">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold">
                  SY
                </div>
                <span className="text-lg font-semibold">Shivam Yadav</span>
              </div>
              <p className="max-w-sm text-sm text-gray-300  antialiased ">
                Building modern, scalable and user-friendly web experiences with
                React and modern UI systems.
              </p>
              <div className="flex gap-3 text-gray-300">
                <FaWhatsapp
                  size={22}
                  className="cursor-pointer hover:text-green-400 hover:scale-120 transition-all  dureation-900 "
                />
                <FaGithub
                  size={20}
                  className="cursor-pointer  hover:text-white hover:scale-120 transition-all  dureation-900"
                />
                <FaLinkedinIn
                  size={20}
                  className="cursor-pointer  hover:text-blue-400 hover:scale-120 transition-all  dureation-900"
                />
                <FaTwitter
                  size={20}
                  className="cursor-pointer  hover:text-blue-400 hover:scale-120 transition-all  dureation-900"
                />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 text-md pr-4 font-semibold text-orange-400">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white cursor-pointer" href="/">
                  Home
                </li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Service</li>
                <li className="hover:text-white cursor-pointer">Resume</li>
                <li className="hover:text-white cursor-pointer">Project</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-md font-semibold text-orange-400">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+91 9691214330</li>
                <li>shivamyadav35314@gmail.com</li>
                <li>portfolio</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-md font-semibold text-orange-400">
                Get the latest information
              </h4>
              <div className="flex overflow-hidden rounded-4xl bg-white">
                <div className="flex items-center px-3  text-gray-400 py-3">
                  <MdAttachEmail color="orange" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-2 py-3 text-sm text-gray-800 outline-none "
                  onChange={handleOnChange}
                />
                <button className="bg-orange-500 px-4 text-white cursor-pointer hover:bg-orange-700 transition">
                  <IoSendSharp />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="my-6 h-[1px] w-full bg-gray-600/60" />

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
            <p>© {new Date().getFullYear()} .Shivam All Rights Reserved.</p>
            <p>
              User Terms & Conditions <span className="mx-2">|</span> Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
