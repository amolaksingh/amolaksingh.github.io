import FadeUp from "../common/animations/FadeUp";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050816] py-32">
      <FadeUp>
       <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          About Me
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Building Android products
          <br />
          that people love to use.
        </h2>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-xl leading-10 text-slate-300">
              I'm an Android Engineer with over 9 years of experience
              designing and building scalable mobile applications.
              My expertise includes Kotlin, Jetpack Compose,
              Compose Multiplatform, Clean Architecture,
              Kotlin Multiplatform and AI-powered applications.
            </p>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              Throughout my career I've worked on consumer products,
              enterprise applications, live streaming platforms,
              finance solutions and property management systems,
              always focusing on performance, maintainability
              and exceptional user experience.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

            <h3 className="text-2xl font-bold text-white">
              Quick Facts
            </h3>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-slate-400">Experience</p>
                <h4 className="mt-1 text-3xl font-bold text-white">
                  9+ Years
                </h4>
              </div>

              <div>
                <p className="text-slate-400">Primary Stack</p>
                <h4 className="mt-1 text-3xl font-bold text-white">
                  Kotlin & Jetpack Compose
                </h4>
              </div>

              <div>
                <p className="text-slate-400">Architecture</p>
                <h4 className="mt-1 text-3xl font-bold text-white">
                  Clean + MVI + MVVM
                </h4>
              </div>

              <div>
                <p className="text-slate-400">Current Focus</p>
                <h4 className="mt-1 text-3xl font-bold text-white">
                  AI + KMP + Compose
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
      </FadeUp>

      <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}