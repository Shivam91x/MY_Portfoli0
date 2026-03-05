import { NavLink } from "react-router-dom";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Service", path: "/service" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/projects" },
  { label: "Contact", path: "/contact" }, 
];

export default function Navbar() {
  return (
<header className="w-full flex justify-center  sticky top-2  z-50">
  <nav
  className="
  w-[70%]
  flex items-center justify-between
  gap-3
  rounded-full
  bg-black/70 backdrop-blur-lg
  border-2 border-gray-400/30
  px-6 py-2
  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
"
>
    {/* Left Links */}
    <div className="flex items-center gap-2">
      {navItems.slice(0, 3).map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition ${
            isActive
  ? "bg-orange-500 text-white  border-3 border-gray-200/70 shadow-2xl"
  : "text-gray-300 hover:text-white hover:bg-white/20"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>

    {/* Center Social */}
    <div className="mx-4 flex items-center gap-3 rounded-full bg-white/10 px-2 py-1 backdrop-blur-sm hover:bg-white/20 transition">
      <a
        href="https://github.com/Shivam91x"
        target="_blank"
        rel="noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="GitHub"
      >
        <FaGithubSquare size={22} className="text-white" />
      </a>

      <a
        href="https://www.linkedin.com/in/shivam-yadav0001/"
        target="_blank"
        rel="noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="LinkedIn"
      >
        <LinkedInIcon size={22} className="text-blue-500"/>
      </a>

      <a
        href="https://wa.me/919691214330"
        target="_blank"
        rel="noreferrer"
        className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} className="text-green-400" />
      </a>
    </div>

    {/* Right Links */}
    <div className="flex items-center gap-2">
      {navItems.slice(3).map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition ${
              isActive
              ? "bg-orange-500 text-white  border-3 border-gray-200/70 shadow-2xl"
              : "text-gray-300 hover:text-white hover:bg-white/20"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  </nav>
</header>

  );
}
