import {Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050816] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Amolak Singh. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/amolak13">
            <FaGithub size={22} className="text-slate-400 hover:text-white" />
          </a>

          <a href="https://linkedin.com/in/amolak-singh-b0173a113">
            <FaLinkedin size={22} className="text-slate-400 hover:text-white" />
          </a>

          <a href="mailto:amolak.saund@gmail.com">
            <Mail size={22} className="text-slate-400 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
