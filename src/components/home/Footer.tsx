import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-8 text-center sm:px-6 lg:flex-row lg:px-12 lg:text-left">

        {/* Left */}

        <div>
          <h3 className="text-xl font-bold text-white">
            Amolak Singh
          </h3>

          <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
            Senior Android Engineer specializing in Kotlin,
            Jetpack Compose, Compose Multiplatform,
            Clean Architecture and AI-powered mobile applications.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} Amolak Singh. All rights reserved.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-col items-center gap-5 lg:items-end">

          <div className="flex items-center gap-5">

            {/* GitHub */}

            <a
              href="https://github.com/amolaksingh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/amolak-singh-b0173a113"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>

            {/* Email */}

            <a
              href="mailto:amolak.saund@gmail.com"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-400"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919803664972"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>

          </div>

          <p className="text-sm text-slate-500">
            Chandigarh, Punjab, India 🇮🇳
          </p>

        </div>

      </div>
    </footer>
  );
}