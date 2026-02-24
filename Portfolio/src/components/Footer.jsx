import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        <div className="flex items-center gap-3 text-lg">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-orange-500">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
