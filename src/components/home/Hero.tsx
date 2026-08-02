import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-blue-400 font-medium">
          👋 Hi, I'm
        </p>

        <h1 className="mt-4 text-6xl font-black leading-tight md:text-8xl">
          Amolak
          <br />
          Singh
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
          Senior Android Engineer
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          Building scalable Android applications with Kotlin, Jetpack Compose,
          Compose Multiplatform, Clean Architecture and AI integrations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button>Hire Me</Button>

          <Button variant="secondary">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}