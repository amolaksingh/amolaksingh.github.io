import FadeUp from "../common/animations/FadeUp";
import { Mail, MapPin } from "lucide-react";
import {FaLinkedin } from "react-icons/fa6";
export default function Contact() {
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

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl">
                <Mail size={42} className="mx-auto text-blue-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">Email</h3>

              <p className="mt-4 text-slate-400 break-all">
                amolak.saund@gmail.com
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl">
                <MapPin size={42} className="mx-auto text-blue-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">Location</h3>

              <p className="mt-4 text-slate-400">Chandigarh, India</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
              <div className="text-4xl">
                <FaLinkedin size={42} className="mx-auto text-blue-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">LinkedIn</h3>

              <a
                href="https://linkedin.com/in/amolak-singh-b0173a113"
                target="_blank"
                className="mt-4 block text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </FadeUp>
    </section>
  );
}
