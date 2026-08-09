import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        min-w-0
        max-w-full
        overflow-hidden
        bg-[#050816]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          min-w-0
          max-w-7xl
          px-5
          sm:px-6
          lg:px-12
        "
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Featured Projects
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          Selected Work
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
          A selection of Android applications built with modern technologies,
          scalable architecture, and production-ready engineering practices.
        </p>

        <div className="mt-14 w-full min-w-0 max-w-full space-y-8 sm:mt-20 sm:space-y-10">
          <ProjectCard
            title="PropertyHub"
            subtitle="Premium Property Platform"
            description="Modern real-estate investment platform built using Jetpack Compose, MVI, Ktor and Clean Architecture."
            image="/mockups/iphone15-black.png"
            technologies={[
              "Kotlin",
              "Jetpack Compose",
              "MVI",
              "Ktor",
              "Firebase",
            ]}
          />

          <ProjectCard
            title="AI Chat"
            subtitle="AI Assistant Platform"
            description="AI-powered assistant with streaming conversations, modern Compose UI and Gemini/OpenAI integration."
            image="/mockups/iphone15-blue.png"
            technologies={[
              "Gemini",
              "OpenAI",
              "Jetpack Compose",
              "Kotlin",
              "AI",
            ]}
          />

          <ProjectCard
            title="Live Streaming"
            subtitle="Multi Platform Streaming"
            description="Enterprise RTMP streaming engine with OpenGL rendering and modern Android architecture."
            image="/mockups/iphone15-natural.png"
            technologies={[
              "RTMP",
              "OpenGL",
              "Compose",
              "Firebase",
              "MVI",
            ]}
          />
        </div>
      </div>

      <div className="mx-auto mt-24 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}