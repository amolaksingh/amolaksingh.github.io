"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-200 ${
          menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Navbar */}
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-2xl border transition-all duration-300 ${
              scrolled
                ? "border-slate-700 bg-slate-900/90 backdrop-blur-2xl shadow-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            {/* Desktop / Mobile Header */}

            <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">
              {/* Logo */}

              <a href="#" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-lg font-bold text-white">
                  AS
                </div>

                <div className="hidden sm:block">
                  <h2 className="font-bold text-white">Amolak Singh</h2>

                  <p className="text-xs text-slate-400">Android Engineer</p>
                </div>
              </a>

              {/* Desktop Navigation */}

              <nav className="hidden items-center gap-10 lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    {item}

                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* Desktop Resume */}

              <div className="hidden lg:block">
                <Button
                  variant="secondary"
                  onClick={() =>
                    window.open("/resume/Amolak_Singh_Resume.pdf", "_blank")
                  }
                >
                  Download CV
                </Button>
              </div>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-xl p-2 text-white transition hover:bg-slate-800 lg:hidden"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#050816] lg:hidden">
          {/* Header */}

          <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
            <a
              href="#"
              onClick={closeMenu}
              className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-2xl font-bold text-white"
            >
              AS
            </a>

            <button
              onClick={closeMenu}
              className="rounded-xl p-2 text-white transition hover:bg-slate-800"
            >
              <X size={34} />
            </button>
          </div>

          {/* Content */}

          <div className="flex h-[calc(100vh-80px)] flex-col overflow-y-auto">
            <nav className="flex-1 space-y-8 px-8 py-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block text-3xl font-semibold text-slate-300 transition hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="border-t border-slate-800 p-6">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  closeMenu();
                  window.open("/resume/Amolak_Singh_Resume.pdf", "_blank");
                }}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
