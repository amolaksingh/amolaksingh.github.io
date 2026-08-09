import IPhoneMockup from "../common/IPhoneMockup";
import PropertyPreview from "../common/PropertyPreview";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
}: Props) {
  return (
    <div
      className="
        group
        w-full
        min-w-0
        max-w-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        transition
        duration-500
        hover:border-blue-500
        hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
      "
    >
      <div
        className="
          grid
          w-full
          min-w-0
          items-center
          gap-10
          p-5
          sm:gap-12
          sm:p-8
          lg:grid-cols-2
          lg:p-10
        "
      >
        {/* Phone */}

        <div
          className="
            flex
            w-full
            min-w-0
            max-w-full
            justify-center
            overflow-visible
          "
        >
          <div
            className="
              relative
              w-full
              min-w-0
              max-w-full
              transition
              duration-500
              group-hover:-translate-y-3
            "
          >
            <div
              className="
                flex
                w-full
                min-w-0
                max-w-full
                justify-center
                transition
                duration-500
                group-hover:-translate-y-2
              "
            >
              <IPhoneMockup>
                <PropertyPreview />
              </IPhoneMockup>
            </div>
          </div>
        </div>

        {/* Content */}

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

          <div className="mt-8 flex min-w-0 max-w-full flex-wrap gap-3 sm:mt-10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900
                  px-3
                  py-2
                  text-xs
                  text-slate-300
                  sm:px-4
                  sm:text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <button
              className="
                w-full
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-500
                sm:w-auto
              "
            >
              Live Demo
            </button>

            <button
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:border-blue-500
                sm:w-auto
              "
            >
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}