"use client";
import FadeUp from "../common/animations/FadeUp";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import HireModal from "../hire/HireModal";

type ContactProps = {
  onOpenHire: () => void;
};

export default function Contact({ onOpenHire }: ContactProps) {
  const [openHire, setOpenHire] = useState(false);
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      <FadeUp>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Let's build something amazing together.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            Whether you need a high-performance Android application, Jetpack
            Compose development, KMP architecture, or AI-powered mobile
            solutions, I'd love to hear about your project.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {/* Email */}

            <div
              onClick={onOpenHire}
              className="cursor-pointer block rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
              <Mail size={42} className="mx-auto text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold text-white">Email</h3>

              <p className="mt-4 break-all text-slate-400">
                amolak.saund@gmail.com
              </p>
            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919803664972?text=Hi%20Amolak,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]"
            >
              <div className="text-center text-5xl">💬</div>

              <h3 className="mt-6 text-2xl font-bold text-white">WhatsApp</h3>

              <p className="mt-4 text-slate-400">Chat Instantly</p>
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/amolak-singh-b0173a113"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
              <FaLinkedin size={42} className="mx-auto text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold text-white">LinkedIn</h3>

              <p className="mt-4 text-slate-400">Connect with me</p>
            </a>

            {/* Location */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <MapPin size={42} className="mx-auto text-blue-400" />

              <h3 className="mt-6 text-2xl font-bold text-white">Location</h3>

              <p className="mt-4 text-slate-400">Chandigarh, India</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </FadeUp>

      <HireModal open={openHire} onClose={() => setOpenHire(false)} />
    </section>
  );
}
