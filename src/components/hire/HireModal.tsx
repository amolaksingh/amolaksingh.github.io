"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import HireForm from "./HireForm";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function HireModal({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-[#0b1020] shadow-[0_0_80px_rgba(37,99,235,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}

              <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-800 bg-[#0b1020] px-5 py-5 sm:px-8">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Hire Me
                  </h2>

                  <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    Let's discuss your Android project.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}

              <div className="overflow-y-auto">
                <HireForm onClose={onClose} />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}