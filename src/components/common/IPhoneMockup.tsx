"use client";
import { motion } from "framer-motion";
type IPhoneMockupProps = {
  children?: React.ReactNode;
};

export default function IPhoneMockup({
  children,
}: IPhoneMockupProps) {
  return (
    <motion.div
    className="relative mx-auto"
    animate={{
        y: [0, -12, 0],
        rotate: [0, 1, 0, -1, 0],
    }}
    transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
    }}
>

      {/* Glow */}

      <div className="absolute inset-0 rounded-[60px] bg-blue-500/20 blur-3xl" />

      {/* Phone */}

      <div className="relative h-[650px] w-[320px] rounded-[55px] border border-zinc-700 bg-black p-[8px] shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

        {/* Frame */}

        <div className="relative h-full w-full overflow-hidden rounded-[48px] bg-[#09090B]">

          {/* Dynamic Island */}

          <div className="absolute left-1/2 top-3 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />

          {/* Status Bar */}

          <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-8 pt-5 text-xs font-semibold text-white">

            <span>9:41</span>

            <div className="flex items-center gap-1">

              <div className="h-2 w-2 rounded-full bg-green-400" />

              <div className="h-2 w-6 rounded-full bg-white" />

            </div>

          </div>

          {/* Screen */}

          <div className="h-full w-full">

            {children}

          </div>

        </div>

      </div>

    </motion.div>
  );
}