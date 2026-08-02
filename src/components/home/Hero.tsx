"use client";

import Button from "../common/Button";
import AnimatedBackground from "../background/AnimatedBackground";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import IPhoneMockup from "../common/IPhoneMockup";
import PropertyPreview from "../common/PropertyPreview";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36">
      <AnimatedBackground />

      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-6 pb-24 lg:px-12 lg:pb-32">
        {/* LEFT */}

        <div className="w-full lg:w-[58%]">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400"
          >
            Android Architect • Kotlin • AI
          </motion.span>

          <motion.h1
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 text-6xl font-black leading-[0.82] tracking-[-0.06em] text-white md:text-8xl xl:text-[8rem]"
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
            className="mt-10 text-3xl font-semibold text-slate-200 md:text-4xl"
          >
            Building scalable Android products
          </motion.h2>

          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-xl text-xl leading-9 text-slate-400"
          >
            Senior Mobile Architect & Tech Lead with 9+ years of experience
            building high-performance Android applications using Kotlin, Jetpack
            Compose, Compose Multiplatform, Clean Architecture, and AI-powered
            experiences.
          </motion.p>

          <motion.div
            custom={0.65}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button>Hire Me</Button>

            <Button variant="secondary">Download CV</Button>
          </motion.div>

          {/* STATS */}

          <motion.div
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
          >
            {[
              ["9+", "Years Experience"],
              ["20+", "Projects"],
              ["10+", "Core Technologies"],
            ].map(([number, title]) => (
              <div key={title}>
                <h3 className="text-4xl font-bold text-white">{number}</h3>

                <p className="mt-2 text-slate-400">{title}</p>
              </div>
            ))}
          </motion.div>

          {/* TECH */}

          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-16 flex flex-wrap gap-4"
          >
            {["Kotlin", "Compose", "KMP", "Android", "Firebase", "AI"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-slate-300 hover:border-blue-500 hover:text-white"
                >
                  {item}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex lg:w-[42%] items-center justify-center">
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-[120px]" />

            <IPhoneMockup>
              <PropertyPreview />
            </IPhoneMockup>
          </motion.div>
        </div>
      </div>
      <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
