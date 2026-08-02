"use client";

import GradientBlob from "./GradientBlob";
import Grid from "./Grid";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <Grid />

      {/* Blue */}
      <GradientBlob
        className="left-[-250px] top-[-180px] h-[550px] w-[550px]"
        color="bg-blue-600/25"
      />

      {/* Cyan */}
      <GradientBlob
        className="right-[-220px] top-[10%] h-[450px] w-[450px]"
        color="bg-cyan-500/20"
      />

      {/* Indigo */}
      <GradientBlob
        className="bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2"
        color="bg-indigo-600/20"
      />

      {/* Purple */}
      <GradientBlob
        className="bottom-0 right-[-180px] h-[350px] w-[350px]"
        color="bg-purple-600/20"
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\"/%3E%3C/filter%3E%3Crect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"1\"/%3E%3C/svg%3E')",
        }}
      />

    </div>
  );
}