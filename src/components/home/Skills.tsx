import StaggerContainer from "../common/animations/StaggerContainer";
import {
  Smartphone,
  Code2,
  Layers3,
  Cpu,
  Bot,
  Briefcase,
} from "lucide-react";

const skills = [
  {
    title: "Android",
    icon: Smartphone,
    description:
      "Native Android development with Kotlin, Jetpack Compose and modern Android architecture.",
  },
  {
    title: "Kotlin",
    icon: Code2,
    description:
      "Coroutines, Flow, DSLs, Ktor and advanced Kotlin features.",
  },
  {
    title: "Jetpack Compose",
    icon: Layers3,
    description:
      "Modern declarative UI with Material 3, animations and responsive design.",
  },
  {
    title: "Compose Multiplatform",
    icon: Cpu,
    description:
      "Shared UI across Android, iOS, Desktop and Web using Kotlin Multiplatform.",
  },
  {
    title: "Architecture",
    icon: Briefcase,
    description:
      "Clean Architecture, MVVM, MVI, SOLID principles and Multi-Module projects.",
  },
  {
    title: "AI Integration",
    icon: Bot,
    description:
      "Gemini, OpenAI, Claude AI and AI-powered Android experiences.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-24 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
          Skills
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:mt-6 lg:text-5xl">
          Technologies
          <br className="hidden sm:block" />
          I work with every day.
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg lg:text-xl">
          My expertise spans Android development, cross-platform technologies,
          scalable architectures, cloud services, and AI integrations to build
          modern mobile applications.
        </p>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 sm:h-16 sm:w-16">
                <skill.icon
                  size={30}
                  strokeWidth={1.8}
                  className="text-blue-400 transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white sm:mt-8 sm:text-2xl">
                {skill.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                {skill.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>

      <div className="mx-auto mt-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}