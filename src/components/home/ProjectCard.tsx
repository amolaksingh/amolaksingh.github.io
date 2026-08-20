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
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  const demoImage = screenshots[0];
  const currentScreenshot = screenshots[currentScreenshotIndex];
  const previewImage = "/projects/propertyhub/home.png";

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
                {title === "PropertyHub" ? (
                  <img
                    src={previewImage}
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
              <button
                type="button"
                onClick={() => {
                  setCurrentScreenshotIndex(0);
                  setShowLiveDemo(true);
                }}
                className="
      w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white
      transition hover:bg-blue-500 sm:w-auto
    "
              >
                Live Demo
              </button>

              <button
                type="button"
                onClick={() => setShowCaseStudy(true)}
                className="
      w-full rounded-xl border border-slate-700 px-6 py-3 font-semibold
      text-white transition hover:border-blue-500 sm:w-auto
    "
              >
                Case Study
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Modal */}
      {showLiveDemo && screenshots.length > 0 && (
        <div
          className="flex max-h-[95vh] max-w-[95vw] flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-5 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Live Demo
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
          </div>

          <div className="h-[75vh] max-h-[850px]">
            <IPhoneMockup>
              <img
                src={currentScreenshot}
                alt={`${title} screen ${currentScreenshotIndex + 1}`}
                className="h-full w-full object-cover"
              />
            </IPhoneMockup>
          </div>

          {/* Navigation */}
          <div className="mt-5 flex items-center gap-4">
            <button
              type="button"
              disabled={currentScreenshotIndex === 0}
              onClick={() =>
                setCurrentScreenshotIndex((index) => Math.max(0, index - 1))
              }
              className="
        rounded-xl border border-slate-700
        px-4 py-2 text-white
        transition hover:border-blue-500
        disabled:cursor-not-allowed disabled:opacity-30
      "
            >
              ←
            </button>

            <span className="min-w-[80px] text-center text-sm text-slate-300">
              {currentScreenshotIndex + 1} / {screenshots.length}
            </span>

            <button
              type="button"
              disabled={currentScreenshotIndex === screenshots.length - 1}
              onClick={() =>
                setCurrentScreenshotIndex((index) =>
                  Math.min(screenshots.length - 1, index + 1),
                )
              }
              className="
        rounded-xl border border-slate-700
        px-4 py-2 text-white
        transition hover:border-blue-500
        disabled:cursor-not-allowed disabled:opacity-30
      "
            >
              →
            </button>
          </div>
        </div>
      )}

      {showCaseStudy && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} case study`}
          onClick={() => setShowCaseStudy(false)}
        >
          <div
            className="
        relative mx-auto my-8 w-full max-w-4xl rounded-3xl
        border border-slate-800 bg-slate-900 p-6 shadow-2xl
        sm:p-10
      "
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close case study"
              onClick={() => setShowCaseStudy(false)}
              className="
          absolute right-5 top-5 rounded-full border border-white/20
          bg-white/10 px-4 py-2 text-xl text-white
          hover:bg-white/20
        "
            >
              ×
            </button>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Case Study
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              {description}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Architecture</h3>

              <p className="mt-3 leading-7 text-slate-400">
                PropertyHub follows a scalable multi-module Clean Architecture
                with separate feature, core, domain and data layers. State
                management is implemented using MVI.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">
                Technology Stack
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                rounded-full border border-slate-700
                bg-slate-950 px-4 py-2 text-sm text-slate-300
              "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>• User onboarding and authentication</li>
                <li>• Property discovery and search</li>
                <li>• Advanced property filters</li>
                <li>• Property details and market insights</li>
                <li>• Favorites and saved properties</li>
                <li>• Messaging and notifications</li>
                <li>• Profile and security management</li>
                <li>• Location selection</li>
                <li>• Tour scheduling</li>
                <li>• Local-first data with Room and Paging 3</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Backend</h3>

              <p className="mt-3 leading-7 text-slate-400">
                The backend is built with Ktor and uses MongoDB for persistence.
                GitHub Actions is used for automated testing, linting and
                release APK generation.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
