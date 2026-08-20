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
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  return (
    <>
      <div
        className="
          group w-full min-w-0 max-w-full overflow-hidden rounded-3xl
          border border-slate-800 bg-slate-900/60 transition duration-500
          hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
        "
      >
        <div
          className="
            grid w-full min-w-0 items-center gap-10 p-5 sm:gap-12 sm:p-8
            lg:grid-cols-2 lg:p-10
          "
        >
          <div className="flex w-full min-w-0 max-w-full justify-center overflow-hidden">
            {screenshots.length > 0 ? (
              <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                {screenshots.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setSelectedScreenshot(src)}
                    className="
                      group/shot relative overflow-hidden rounded-2xl border border-slate-800
                      bg-slate-950 text-left transition duration-300
                      hover:-translate-y-1 hover:border-blue-500
                      hover:shadow-[0_12px_35px_rgba(37,99,235,0.18)]
                    "
                    aria-label={`Open ${title} screenshot ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${title} app screen ${index + 1}`}
                      loading={index < 6 ? "eager" : "lazy"}
                      className="block aspect-[9/16] w-full object-cover transition duration-500 group-hover/shot:scale-[1.03]"
                    />
                    <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="relative w-full min-w-0 max-w-full">
                <div className="flex w-full min-w-0 max-w-full justify-center">
                  <IPhoneMockup>
                    <PropertyPreview />
                  </IPhoneMockup>
                </div>
              </div>
            )}
          </div>

          <div className="w-full min-w-0 max-w-full">
            <span className="text-sm text-blue-400 sm:text-base">{subtitle}</span>

            <h3 className="mt-3 break-words text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h3>

            <p className="mt-6 break-words text-base leading-8 text-slate-400 sm:mt-8 sm:text-lg sm:leading-9">
              {description}
            </p>

            <div className="mt-8 flex min-w-0 max-w-full flex-wrap gap-3 sm:mt-10">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-slate-700 bg-slate-900 px-3 py-2
                    text-xs text-slate-300 sm:px-4 sm:text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {screenshots.length > 0 && (
              <p className="mt-5 text-sm text-slate-500">
                {screenshots.length} app screens · Click any screenshot to view it full size.
              </p>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <button
                className="
                  w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white
                  transition hover:bg-blue-500 sm:w-auto
                "
              >
                Live Demo
              </button>

              <button
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

      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot preview`}
          onClick={() => setSelectedScreenshot(null)}
        >
          <button
            type="button"
            aria-label="Close screenshot"
            onClick={() => setSelectedScreenshot(null)}
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xl text-white hover:bg-white/20"
          >
            ×
          </button>

          <img
            src={selectedScreenshot}
            alt={`${title} full-size app screen`}
            className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
