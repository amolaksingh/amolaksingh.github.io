import { useState } from "react";

import IPhoneMockup from "../common/IPhoneMockup";
import PropertyPreview from "../common/PropertyPreview";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  screenshots?: string[];
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  image,
  screenshots = [],
}: Props) {
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  const demoImage = screenshots[0];

  return (
    <>
      <div
        className="
          group w-full min-w-0 max-w-full overflow-hidden rounded-3xl
          border border-slate-800 bg-slate-900/60 transition duration-500
          hover:border-blue-500
          hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
        "
      >
        <div
          className="
            grid w-full min-w-0 items-center gap-10 p-5
            sm:gap-12 sm:p-8
            lg:grid-cols-2 lg:p-10
          "
        >
          {/* App Preview */}
          <div className="flex w-full min-w-0 justify-center">
            <div className="relative">
              <IPhoneMockup>
                {demoImage ? (
                  <img
                    src={demoImage}
                    alt={`${title} Home screen`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PropertyPreview />
                )}
              </IPhoneMockup>
            </div>
          </div>

          {/* Project Information */}
          <div className="w-full min-w-0 max-w-full">
            <span className="text-sm text-blue-400 sm:text-base">
              {subtitle}
            </span>

            <h3 className="mt-3 break-words text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h3>

            <p className="mt-6 break-words text-base leading-8 text-slate-400 sm:mt-8 sm:text-lg sm:leading-9">
              {description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex min-w-0 max-w-full flex-wrap gap-3 sm:mt-10">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-slate-700
                    bg-slate-900 px-3 py-2
                    text-xs text-slate-300
                    sm:px-4 sm:text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              {demoImage && (
                <button
                  type="button"
                  onClick={() => setShowLiveDemo(true)}
                  className="
                    w-full rounded-xl bg-blue-600 px-6 py-3
                    font-semibold text-white transition
                    hover:bg-blue-500 sm:w-auto
                  "
                >
                  Live Demo
                </button>
              )}

              <button
                type="button"
                className="
                  w-full rounded-xl border border-slate-700
                  px-6 py-3 font-semibold text-white
                  transition hover:border-blue-500 sm:w-auto
                "
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Modal */}
      {showLiveDemo && demoImage && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/90 p-4 backdrop-blur-md
          "
          role="dialog"
          aria-modal="true"
          aria-label={`${title} live demo`}
          onClick={() => setShowLiveDemo(false)}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close live demo"
            onClick={() => setShowLiveDemo(false)}
            className="
              absolute right-5 top-5 z-10
              rounded-full border border-white/20
              bg-white/10 px-4 py-2
              text-2xl text-white
              transition hover:bg-white/20
            "
          >
            ×
          </button>

          {/* Demo */}
          <div
            className="flex max-h-[95vh] max-w-[95vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
                Live Demo
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {title}
              </h3>
            </div>

            <div className="h-[75vh] max-h-[850px]">
              <IPhoneMockup>
                <img
                  src={demoImage}
                  alt={`${title} Home screen`}
                  className="h-full w-full object-cover"
                />
              </IPhoneMockup>
            </div>

            <p className="mt-5 text-center text-sm text-slate-400">
              Interactive Android application showcase
            </p>
          </div>
        </div>
      )}
    </>
  );
}