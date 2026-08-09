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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const downloadResume = () => {
    window.open("/resume/Amolak_Singh_Resume.pdf", "_blank");
  };

  return (
    <>
      {/* =========================
          DESKTOP / MOBILE NAVBAR
      ========================== */}

      <header className="fixed inset-x-0 top-0 z-50 w-full overflow-x-clip">
        <div className="mx-auto w-full max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
          <div
            className={`w-full rounded-2xl border transition-all duration-300 ${
              scrolled
                ? "border-slate-700 bg-slate-900/90 shadow-xl backdrop-blur-2xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <div className="flex h-16 w-full min-w-0 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
              {/* =========================
                  LOGO
              ========================== */}

              <a
                href="#"
                className="flex min-w-0 shrink-0 items-center gap-3"
                onClick={closeMenu}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg">
                  AS
                </div>

                <div className="hidden min-w-0 sm:block">
                  <h2 className="truncate font-bold text-white">
                    Amolak Singh
                  </h2>

                  <p className="truncate text-xs text-slate-400">
                    Android Engineer
                  </p>
                </div>
              </a>

              {/* =========================
                  DESKTOP NAVIGATION
              ========================== */}

              <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="group relative whitespace-nowrap text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    {item}

                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* =========================
                  DESKTOP RESUME
              ========================== */}

              <div className="hidden shrink-0 lg:block">
                <Button
                  variant="secondary"
                  onClick={downloadResume}
                >
                  Download CV
                </Button>
              </div>

              {/* =========================
                  MOBILE MENU BUTTON
              ========================== */}

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((previous) => !previous)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white transition hover:bg-slate-800 lg:hidden"
              >
                <Menu size={27} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE FULL SCREEN MENU
      ========================== */}

      {menuOpen && (
        <div className="fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-[#050816] lg:hidden">
          {/* Mobile Menu Header */}

          <div className="flex h-20 w-full items-center justify-between border-b border-slate-800 px-5 sm:px-6">
            {/* Logo */}

            <a
              href="#"
              onClick={closeMenu}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white"
            >
              AS
            </a>

            {/* Close Button */}

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white transition hover:bg-slate-800"
            >
              <X size={30} />
            </button>
          </div>

          {/* Mobile Menu Content */}

          <div className="flex h-[calc(100dvh-80px)] w-full flex-col overflow-y-auto overflow-x-hidden">
            {/* Navigation */}

            <nav className="flex-1 space-y-7 px-6 py-8 sm:px-8 sm:py-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="block text-2xl font-semibold text-slate-300 transition hover:text-blue-400 sm:text-3xl"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Bottom Resume Button */}

            <div className="w-full border-t border-slate-800 p-5 sm:p-6">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  closeMenu();
                  downloadResume();
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