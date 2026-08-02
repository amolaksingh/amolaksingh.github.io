import FadeUp from "../common/animations/FadeUp";
import {
  Briefcase,
  Cpu,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function About() {
  const facts = [
    {
      icon: Briefcase,
      title: "Experience",
      value: "9+ Years",
    },
    {
      icon: Cpu,
      title: "Primary Stack",
      value: "Kotlin & Compose",
    },
    {
      icon: Layers3,
      title: "Architecture",
      value: "Clean • MVI • MVVM",
    },
    {
      icon: Sparkles,
      title: "Current Focus",
      value: "AI • KMP • CMP",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-24 scroll-mt-28"
    >
      <FadeUp>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mt-6 lg:text-5xl">
            Building Android products
            <br className="hidden sm:block" />
            that people love to use.
          </h2>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}

            <div>
              <p className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
                I'm an Android Engineer with over 9 years of experience
                designing and building scalable mobile applications.
                My expertise includes Kotlin, Jetpack Compose,
                Compose Multiplatform, Clean Architecture,
                Kotlin Multiplatform and AI-powered applications.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
                Throughout my career I've worked on consumer products,
                enterprise applications, live streaming platforms,
                finance solutions and property management systems,
                always focusing on performance, maintainability
                and exceptional user experience.
              </p>
            </div>

            {/* RIGHT */}

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md sm:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white">
                Quick Facts
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
                  >
                    <fact.icon
                      size={28}
                      className="text-blue-400"
                    />

                    <p className="mt-4 text-sm text-slate-400">
                      {fact.title}
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-white sm:text-xl">
                      {fact.value}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <div className="mx-auto mt-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}