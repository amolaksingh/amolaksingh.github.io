import StaggerContainer from "../common/animations/StaggerContainer";

const experiences = [
  {
    year: "Feb 2020 - Present",
    role: "Senior Mobile Architect & Tech Lead",
    company: "CodeBrew Labs (Including BlockTech Brew Venture)",
    location: "Chandigarh, India",
    description:
      "Leading the architecture and development of enterprise Android and cross-platform applications. Standardized Multi-Module Clean Architecture across products, improved application performance, introduced AI-assisted development workflows, established engineering best practices, and led a cross-functional mobile engineering team.",
    achievements: [
      "Led architecture across 10+ enterprise mobile applications",
      "Improved code sharing by up to 90% using Multi-Module Architecture",
      "Reduced application cold-start time by 30%",
      "Reduced crash rate by 40% using Firebase Crashlytics",
      "Managed a team of 6 mobile engineers",
      "Implemented CI/CD using GitHub Actions",
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Compose Multiplatform",
      "KMP",
      "MVI",
      "MVVM",
      "Clean Architecture",
      "Firebase",
      "Ktor",
      "Hilt",
      "GitHub Actions",
      "Claude AI",
      "Cursor AI",
    ],
  },
  {
    year: "Aug 2017 - Jan 2020",
    role: "Android Application Engineer",
    company: "Crinoid Technologies",
    location: "Chandigarh, India",
    description:
      "Designed and developed production Android applications using Java and Kotlin. Focused on scalable architecture, offline-first development, REST API integration, performance optimization, and application stability.",
    achievements: [
      "Delivered 5 production Android applications",
      "Reached over 500K cumulative installs",
      "Improved API response performance by 25%",
      "Implemented Room caching and offline-first architecture",
      "Enhanced application stability through structured testing",
    ],
    tech: [
      "Java",
      "Kotlin",
      "XML",
      "Android SDK",
      "Room",
      "SQLite",
      "Retrofit",
      "LiveData",
      "Firebase",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-20 lg:py-24 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
          Experience
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:mt-6 lg:text-5xl">
          My Journey
        </h2>

        <div className="relative mt-12 lg:mt-16">
          {/* Timeline */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-700 sm:left-5" />

          <StaggerContainer className="space-y-10 lg:space-y-14">
            {experiences.map((item) => (
              <div
                key={item.year}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline Dot */}

                <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 ring-4 ring-[#050816] sm:h-10 sm:w-10 sm:ring-8" />

                {/* Year */}

                <span className="text-sm font-semibold text-blue-400 sm:text-base">
                  {item.year}
                </span>

                {/* Role */}

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  {item.role}
                </h3>

                {/* Company */}

                <div className="mt-2 flex flex-col gap-1 text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                  <span className="text-base font-semibold sm:text-lg">
                    {item.company}
                  </span>

                  <span className="hidden text-slate-500 sm:inline">
                    •
                  </span>

                  <span className="text-sm text-slate-400 sm:text-base">
                    {item.location}
                  </span>
                </div>

                {/* Description */}

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                {/* Achievements */}

                <ul className="mt-6 space-y-3">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-3 text-sm text-slate-300 sm:text-base"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>

      <div className="mx-auto mt-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}