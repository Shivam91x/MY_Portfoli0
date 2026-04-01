import { IoSendSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaArrowRight, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { useNavigate } from "react-router-dom";

const socials = [
  { name: "GitHub",   icon: <FaGithub />,   link: "https://github.com/Shivam91x" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shivam-yadav0001/" },
  { name: "WhatsApp",  icon: <FaWhatsapp />,  link: "https://whatsapp.com/+919691214330" },
];

const navLinks = ["Home", "About Us", "Service", "Resume", "Project"];

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  return (
    <footer className="w-full rounded-t-4xl bg-[#1f1f1f]">
      <div className="w-full rounded-t-2xl px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#242424] px-5 sm:px-8 py-10 text-white">

          {/* ── Top CTA ── */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Let's Connect there
            </h2>
            <button onClick={() => navigate("/contact ")} className="group inline-flex items-center gap-2 rounded-3xl border border-gray-400 px-6 py-3 font-medium bg-orange-50 cursor-pointer text-black transition-all duration-300 hover:bg-orange-600 hover:text-white hover:shadow-lg w-full sm:w-auto justify-center sm:justify-start">
              Connect with me
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>

          {/* ── Divider ── */}
          <div className="my-8 h-px w-full bg-gray-600/60" />

          {/* ── Main Grid (THE BIG FIX) ── */}
          {/* 
            mobile:  1 column (everything stacks)
            tablet:  2 columns (Brand+Nav | Contact+Newsletter)
            desktop: 4 columns (all side by side)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold shrink-0">
                  SY
                </div>
                <span className="text-lg font-semibold">Shivam Yadav</span>
              </div>
              <p className="text-sm text-gray-300 antialiased max-w-xs">
                Building modern, scalable and user-friendly web experiences with
                React and modern UI systems.
              </p>
              <div className="flex gap-4 text-gray-300 text-lg">
                {socials.map((s) => (
                  <div key={s.name} className="relative group">
                    
                     <a href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:text-orange-400 scale-x-200 transition-all duration-200"
                    >
                      {s.icon}
                    </a>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 font-semibold text-orange-400">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {navLinks.map((label) => (
                  <li
                    key={label}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-semibold text-orange-400">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+91 9691214330</li>
                <li className="break-words">shivamyadav35314@gmail.com</li>
                <li>portfolio</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 font-semibold text-orange-400">
                Get the latest information
              </h4>
              {/* 
                On very small screens the input can feel cramped,
                so we let it take full width naturally via flex
              */}
<div className="
  flex overflow-hidden rounded-full bg-white w-full max-w-xs
  focus-within:ring-2 focus-within:ring-orange-400 transition 
">
  <div className="flex items-center px-3 text-gray-400">
    <MdAttachEmail color="orange" size={18} />
  </div>

  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email Address"
    className="flex-1 min-w-0 px-2 py-3 text-sm text-gray-800 outline-none"
  />

  <button
    // onClick={handleSubmit}
    className="bg-orange-500 px-4 cursor-pointer text-white hover:bg-orange-700 transition "
  >
    <IoSendSharp />
  </button>
</div>
            </div>
          </div>

          {/* ── Bottom Divider ── */}
          <div className="my-6 h-px w-full bg-gray-600/60" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Shivam. All Rights Reserved.</p>
            <p className="text-center sm:text-right">
              User Terms & Conditions <span className="mx-2">|</span> Privacy Policy
            </p>
          </div>

      </div>
      </div>
    </footer>
  );
}