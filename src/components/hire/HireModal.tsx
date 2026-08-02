"use client";

import { AnimatePresence, motion } from "framer-motion";
import HireForm from "./HireForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function HireModal({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed left-1/2 top-1/2 z-[60] w-[95%] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-slate-700 bg-[#0b1020] shadow-[0_0_80px_rgba(37,99,235,0.35)]"
          >
            {/* Header */}

            <div className="border-b border-slate-800 px-8 py-6">

              <h2 className="text-3xl font-bold text-white">
                Hire Me
              </h2>

              <p className="mt-2 text-slate-400">
                Let's discuss your Android project.
              </p>

            </div>

            <HireForm onClose={onClose} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}