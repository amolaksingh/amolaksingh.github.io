"use client";

import Button from "../common/Button";
import AnimatedBackground from "../background/AnimatedBackground";
import IPhoneMockup from "../common/IPhoneMockup";
import PropertyPreview from "../common/PropertyPreview";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.7,
    },
  }),
};

type HeroProps = {
  onOpenHire: () => void;
};

export default function Hero({ onOpenHire }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-24 sm:pt-28 lg:pt-36">
      <AnimatedBackground />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-5 pb-16 sm:px-6 lg:min-h-[calc(100vh-120px)] lg:flex-row lg:gap-8 lg:px-12 lg:pb-24">
        {/* LEFT */}

        <div className="w-full text-center lg:w-[58%] lg:text-left">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 sm:px-5 sm:text-sm"
          >
            Android Architect • Kotlin • AI
          </motion.span>

          <motion.h1
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-[8rem]"
          >
            Amolak
            <br />
            Singh
          </motion.h1>

          <motion.h2
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl lg:mt-8 lg:text-4xl"
          >
            Building scalable Android products
          </motion.h2>

          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0 lg:text-xl"
          >
            Senior Mobile Architect & Tech Lead with 9+ years of experience
            building high-performance Android applications using Kotlin, Jetpack
            Compose, Compose Multiplatform, Clean Architecture, MVI, and
            AI-powered mobile experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            custom={0.65}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button onClick={onOpenHire}>Hire Me</Button>

            <Button
              variant="secondary"
              onClick={() =>
                window.open("/resume/Amolak_Singh_Resume.pdf", "_blank")
              }
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}

          <motion.div
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-12 grid w-full max-w-xl grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:mx-0 lg:text-left"
          >
            {[
              ["9+", "Years Experience"],
              ["20+", "Projects"],
              ["10+", "Core Technologies"],
            ].map(([number, title]) => (
              <div key={title}>
                <h3 className="text-3xl font-bold text-white sm:text-4xl">
                  {number}
                </h3>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  {title}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Tech */}

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {["Kotlin", "Compose", "KMP", "Android", "Firebase", "AI"].map(
              (item) => (
                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  {item}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>

        {/* RIGHT */}

        <div className="flex w-full justify-center lg:w-[42%]">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -left-10 top-20 h-44 w-44 rounded-full bg-blue-500/20 blur-[90px] sm:h-60 sm:w-60 lg:h-72 lg:w-72" />

            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-[90px] sm:h-48 sm:w-48 lg:h-56 lg:w-56" />

            <div className="flex w-full max-w-full justify-center overflow-visible px-4 sm:px-0">
              <div className="w-[min(280px,calc(100vw-40px))] sm:w-[300px] md:w-[320px] lg:w-auto">
                <IPhoneMockup>
                  <PropertyPreview />
                </IPhoneMockup>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
