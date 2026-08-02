import IPhoneMockup from "../common/IPhoneMockup";
import PropertyPreview from "../common/PropertyPreview";
import Button from "../common/Button";

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
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">
      <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">

        {/* Phone */}

        <div className="flex justify-center order-1">
          <div className="relative transition duration-500 group-hover:-translate-y-2">
            <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-auto">
              <IPhoneMockup>
                <PropertyPreview />
              </IPhoneMockup>
            </div>
          </div>
        </div>

        {/* Content */}

        <div className="order-2 text-center lg:text-left">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            {subtitle}
          </span>

          <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h3>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
            {description}
          </p>

          {/* Tech */}

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-300 sm:px-4 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Button>
              Live Demo
            </Button>

            <Button variant="secondary">
              Case Study
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
}