import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "PropertyHub",
    subtitle: "Premium Property Platform",
    description:
      "Modern real-estate investment platform built using Jetpack Compose, MVI, Ktor and Clean Architecture.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "MVI",
      "Ktor",
      "Firebase",
    ],
    image: "/mockups/iphone15-black.png",
  },
  {
    title: "AI Chat",
    subtitle: "AI Assistant Platform",
    description:
      "AI-powered assistant with streaming conversations, modern Compose UI and Gemini/OpenAI integration.",
    technologies: [
      "Gemini",
      "OpenAI",
      "Jetpack Compose",
      "Kotlin",
      "AI",
    ],
    image: "/mockups/iphone15-blue.png",
  },
  {
    title: "Live Streaming",
    subtitle: "Multi Platform Streaming",
    description:
      "Enterprise RTMP streaming engine with OpenGL rendering and modern Android architecture.",
    technologies: [
      "RTMP",
      "OpenGL",
      "Compose",
      "Firebase",
      "MVI",
    ],
    image: "/mockups/iphone15-natural.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-24 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
          Featured Projects
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:mt-6 lg:text-5xl">
          Selected Work
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg lg:text-xl">
          A selection of Android applications built with modern technologies,
          scalable architecture, and production-ready engineering practices.
        </p>

        <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}