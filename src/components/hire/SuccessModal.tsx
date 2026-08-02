"use client";

import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import Button from "../common/Button";

type Props = {
  onClose: () => void;
};

export default function SuccessModal({ onClose }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="px-6 py-10 text-center sm:px-10 sm:py-14"
    >
      {/* Success Icon */}

      <motion.div
        initial={{
          scale: 0,
          rotate: -90,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 180,
        }}
        className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10 ring-8 ring-green-500/10"
      >
        <CircleCheckBig
          size={54}
          className="text-green-500"
        />
      </motion.div>

      {/* Title */}

      <h2 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
        Request Sent Successfully
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
        Thank you for reaching out.

        <br />

        I've received your project request and will review it carefully.

        <br />

        You can expect a response within the next
        <span className="font-semibold text-white">
          {" "}
          24 hours.
        </span>
      </p>

      {/* Divider */}

      <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

      {/* Button */}

      <Button
        className="mt-8 w-full sm:w-auto"
        onClick={onClose}
      >
        Close
      </Button>
    </motion.div>
  );
}