"use client";

import { useEffect, useState } from "react";
import Button from "../common/Button";

const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div className="mx-auto mt-6 max-w-7xl px-6 lg:px-8">
        <div
          className={`flex h-20 items-center justify-between rounded-2xl border transition-all duration-500

          ${
            scrolled
              ? "border-slate-700 bg-slate-900/90 shadow-2xl backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }
          
          px-8`}
        >
          {/* Logo */}

          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white transition duration-300 group-hover:scale-110">
              AS
            </div>
          </a>

          {/* Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
              >
                {item}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Resume */}

          <div className="hidden lg:block">
            <Button
              variant="secondary"
              onClick={() => window.open("/resume/Amolak_Singh_Resume.pdf")}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
