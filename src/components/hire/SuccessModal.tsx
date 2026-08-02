"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

type Props = {
  onClose: () => void;
};

export default function SuccessModal({
  onClose,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="p-12 text-center"
    >
      <div className="text-6xl">
        🎉
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Request Sent
      </h2>

      <p className="mt-4 text-slate-400">
        Thanks for contacting me.
        <br />
        I'll get back to you within 24 hours.
      </p>

      <Button
        className="mt-10"
        onClick={onClose}
      >
        Close
      </Button>
    </motion.div>
  );
}