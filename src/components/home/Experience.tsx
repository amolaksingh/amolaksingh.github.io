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
    <section id="experience" className="relative overflow-hidden bg-[#050816] py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Experience
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">My Journey</h2>

        <div className="relative mt-20">
          <div className="absolute left-5 top-0 h-full w-[2px] bg-slate-700" />

          <StaggerContainer className="space-y-14">
            {experiences.map((item) => (
              <div key={item.year} className="relative pl-16">
                <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 ring-8 ring-[#050816]" />

                <span className="text-blue-400 font-semibold">{item.year}</span>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {item.role}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-300">
                  <span className="text-xl font-medium">{item.company}</span>

                  <span className="text-slate-500">•</span>

                  <span className="text-lg text-slate-400">
                    {item.location}
                  </span>
                </div>

                <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
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
      <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
