"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-2xl px-7 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          : "border border-slate-700 bg-transparent text-white hover:border-blue-500 hover:bg-slate-900"
      } ${className}`}
    >
      {children}
    </button>
  );
}