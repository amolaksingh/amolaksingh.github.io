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
            subtitle="Production-Grade Real Estate Platform"
            description="A full-featured real-estate application engineered with Kotlin, Jetpack Compose, MVI and Clean Architecture. The app uses a multi-module architecture with dedicated feature, core, data and domain layers, Room + Paging 3 for local-first data and pagination, Ktor for the backend API, MongoDB for persistence, Hilt for dependency injection, and GitHub Actions for automated testing, linting and release APK builds. Features include onboarding and authentication, property discovery, search and filters, property details, favorites, messaging, notifications, profile and security flows, location selection, market insights and scheduling tours."
            image="/mockups/iphone15-black.png"
            technologies=['Kotlin', 'Jetpack Compose', 'MVI', 'Clean Architecture', 'Multi-Module', 'Ktor', 'MongoDB', 'Room', 'Paging 3', 'Hilt', 'GitHub Actions']
            screenshots=[{'              "/projects/propertyhub/01.png",\n              "/projects/propertyhub/02.png",\n              "/projects/propertyhub/03.png",\n              "/projects/propertyhub/04.png",\n              "/projects/propertyhub/05.png",\n              "/projects/propertyhub/06.png",\n              "/projects/propertyhub/07.png",\n              "/projects/propertyhub/08.png",\n              "/projects/propertyhub/09.png",\n              "/projects/propertyhub/10.png",\n              "/projects/propertyhub/11.png",\n              "/projects/propertyhub/12.png",\n              "/projects/propertyhub/13.png",\n              "/projects/propertyhub/14.png",\n              "/projects/propertyhub/15.png",\n              "/projects/propertyhub/16.png",\n              "/projects/propertyhub/17.png",\n              "/projects/propertyhub/18.png",\n              "/projects/propertyhub/19.png",\n              "/projects/propertyhub/20.png",\n              "/projects/propertyhub/21.png",\n              "/projects/propertyhub/22.png",\n              "/projects/propertyhub/23.png",\n              "/projects/propertyhub/24.png",\n              "/projects/propertyhub/25.png",\n              "/projects/propertyhub/26.png",\n              "/projects/propertyhub/27.png",\n              "/projects/propertyhub/28.png"'}]
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