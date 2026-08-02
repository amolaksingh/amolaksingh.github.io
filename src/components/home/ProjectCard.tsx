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
  image,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">
      <div className="grid items-center gap-12 p-10 lg:grid-cols-2">
        {/* Phone */}

        <div className="flex justify-center">
          <div className="relative transition duration-500 group-hover:-translate-y-3">
            <div className="flex justify-center transition duration-500 group-hover:-translate-y-2">
              <IPhoneMockup>
                <PropertyPreview />
              </IPhoneMockup>
            </div>
          </div>
        </div>

        {/* Content */}

        <div>
          <span className="text-blue-400">{subtitle}</span>

          <h3 className="mt-3 text-4xl font-bold text-white">{title}</h3>

          <p className="mt-8 text-lg leading-9 text-slate-400">{description}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              Live Demo
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
