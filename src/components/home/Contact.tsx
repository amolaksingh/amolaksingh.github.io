"use client";

import FadeUp from "../common/animations/FadeUp";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

type ContactProps = {
  onOpenHire: () => void;
};

export default function Contact({ onOpenHire }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-24 scroll-mt-28"
    >
      <FadeUp>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:mt-6 lg:text-5xl">
            Let's build something amazing together.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg lg:text-xl lg:leading-9">
            Whether you need a high-performance Android application,
            Jetpack Compose development, KMP architecture, or AI-powered
            mobile solutions, I'd love to hear about your project.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {/* Email */}

            <button
              onClick={onOpenHire}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <Mail
                size={42}
                className="mx-auto text-blue-400 transition group-hover:scale-110"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                Hire Me
              </h3>

              <p className="mt-3 text-slate-400">
                Send a project request
              </p>
            </button>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919803664972?text=Hi%20Amolak,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]"
            >
              <FaWhatsapp
                size={42}
                className="mx-auto text-green-500 transition group-hover:scale-110"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-3 text-slate-400">
                Chat Instantly
              </p>
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/amolak-singh-b0173a113"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <FaLinkedin
                size={42}
                className="mx-auto text-blue-500 transition group-hover:scale-110"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                LinkedIn
              </h3>

              <p className="mt-3 text-slate-400">
                Connect with me
              </p>
            </a>

            {/* Location */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center">
              <MapPin
                size={42}
                className="mx-auto text-blue-400"
              />

              <h3 className="mt-6 text-xl font-bold text-white">
                Location
              </h3>

              <p className="mt-3 text-slate-400">
                Chandigarh, India
              </p>
            </div>

          </div>
        </div>

        <div className="mx-auto mt-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </FadeUp>
    </section>
  );
}