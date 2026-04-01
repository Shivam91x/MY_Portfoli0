import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { FaGithubSquare, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Styles for mobile menu animation
const menuAnimationStyle = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .mobile-menu-animate {
    animation: slideIn 0.4s ease-out;
  }
`;

// Add styles to document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = menuAnimationStyle;
  document.head.appendChild(styleElement);
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Service", path: "/service" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const linkClass = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-medium transition ${
    isActive
      ? "bg-orange-500 text-white border-2 border-gray-200/70 shadow-md"
      : "text-gray-300 hover:text-white hover:bg-white/20"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center sticky top-2 z-50">
      {/* ─── DESKTOP NAV (md and above) ─── */}
      <nav className="
        hidden md:flex
        w-[80%] lg:w-[70%]
        items-center justify-between
        gap-3
        rounded-full
        bg-black/70 backdrop-blur-lg
        border-3 border-gray-400/30
        px-6 py-2
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      ">
        {/* Left Links */}
        <div className="flex items-center gap-1">
          {navItems.slice(0, 3).map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Center Social */}
        <div className="flex items-center gap-3 rounded-full bg-white/10 px-2 py-1 backdrop-blur-sm hover:bg-white/20 transition">
          <SocialLinks />
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-1">
          {navItems.slice(3).map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ─── MOBILE NAV (below md) ─── */}
      <div className="md:hidden w-[92%]">
        {/* Mobile Top Bar */}
        <div className="
          flex items-center justify-between
          bg-black/70 backdrop-blur-lg
          border-2 border-gray-400/30
          rounded-full
          px-5 py-2.5
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        ">
          {/* Logo / Brand */}
          <span className="text-white font-semibold text-sm tracking-wide">
            Shivam<span className="text-orange-500">.</span>
          </span>

          {/* Hamburger Only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white p-1 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="
            mobile-menu-animate
            mt-2 mx-auto w-full
            bg-black/80 backdrop-blur-lg
            border border-gray-400/30
            rounded-2xl
            px-4 py-6
            flex flex-col gap-2
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          ">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Centered Social Icons */}
            <div className="mt-4 pt-4 border-t border-gray-400/30 flex justify-center gap-4">
              <MobileSocialLinks />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Extracted so we don't repeat the social icons code
function SocialLinks() {
  return (
    <>
      <a href="https://github.com/Shivam91x" target="_blank" rel="noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="GitHub">
        <FaGithubSquare size={20} className="text-white" />
      </a>
      <a href="https://www.linkedin.com/in/shivam-yadav0001/" target="_blank" rel="noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="LinkedIn">
        <LinkedInIcon style={{ fontSize: 20 }} className="text-blue-500" />
      </a>
      <a href="https://wa.me/919691214330" target="_blank" rel="noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition"
        aria-label="WhatsApp">
        <FaWhatsapp size={20} className="text-green-400" />
      </a>
    </>
  );
}

// Mobile social links with larger size for mobile screens
function MobileSocialLinks() {
  return (
    <>
      <a href="https://github.com/Shivam91x" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/20 transition hover:scale-110"
        aria-label="GitHub">
        <FaGithubSquare size={24} className="text-white" />
      </a>
      <a href="https://www.linkedin.com/in/shivam-yadav0001/" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/20 transition hover:scale-110"
        aria-label="LinkedIn">
        <LinkedInIcon style={{ fontSize: 24 }} className="text-blue-500" />
      </a>
      <a href="https://wa.me/919691214330" target="_blank" rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/20 transition hover:scale-110"
        aria-label="WhatsApp">
        <FaWhatsapp size={24} className="text-green-400" />
      </a>
    </>
  );
}