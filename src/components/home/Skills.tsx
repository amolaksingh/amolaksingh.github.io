import StaggerContainer from "../common/animations/StaggerContainer";
import { Smartphone, Code2, Layers3, Cpu, Bot, Briefcase } from "lucide-react";

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
    description: "Coroutines, Flow, DSLs, Ktor and advanced Kotlin features.",
  },
  {
    title: "Compose",
    icon: Layers3,
    description: "Modern declarative UI with Material 3 and animations.",
  },
  {
    title: "Compose Multiplatform",
    icon: Cpu,
    description: "Shared UI for Android, iOS, Desktop and Web.",
  },
  {
    title: "Architecture",
    icon: Briefcase,
    description: "Clean Architecture, MVVM, MVI and SOLID.",
  },
  {
    title: "AI",
    icon: Bot,
    description: "Gemini, OpenAI and AI-powered Android experiences.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Skills
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Technologies
          <br />I work with every day.
        </h2>

        <StaggerContainer className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
                <skill.icon
                  size={34}
                  strokeWidth={1.8}
                  className="text-blue-400"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {skill.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
            <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

    </section>
  );
}
