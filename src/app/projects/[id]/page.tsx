import { notFound } from "next/navigation";

// Static project data — replace with real content as projects grow
const projects: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    tools: string[];
    highlights: string[];
  }
> = {
  "1": {
    title: "Project One",
    tagline: "A placeholder for your first real project.",
    description:
      "This is the full technical breakdown for Project One. Replace this with a deep-dive into the problem you solved, the architecture decisions you made, and the outcomes you achieved.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Postman API", "Git"],
    highlights: [
      "Designed and implemented a RESTful API integration.",
      "Built a responsive UI with Tailwind CSS.",
      "Managed version control using Git and GitHub.",
    ],
  },
  "2": {
    title: "Project Two",
    tagline: "Database design and system management project.",
    description:
      "Full technical breakdown for Project Two. Describe the data modelling, query optimisation, and system architecture here.",
    tools: ["SQL", "PostgreSQL", "Database Management", "Git"],
    highlights: [
      "Normalised relational schema to 3NF.",
      "Optimised slow queries reducing response time by 60%.",
      "Automated backups and version-controlled migrations.",
    ],
  },
  "3": {
    title: "Project Three",
    tagline: "Placeholder — add your project details.",
    description: "Replace with your project description.",
    tools: ["React", "Node.js", "Git"],
    highlights: ["Add your key highlights here."],
  },
  "4": {
    title: "Project Four",
    tagline: "Placeholder — add your project details.",
    description: "Replace with your project description.",
    tools: ["TypeScript", "SQL", "Postman API"],
    highlights: ["Add your key highlights here."],
  },
  "5": {
    title: "Project Five",
    tagline: "Placeholder — add your project details.",
    description: "Replace with your project description.",
    tools: ["Next.js", "Tailwind CSS", "Git"],
    highlights: ["Add your key highlights here."],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 min-h-screen">
      {/* Back link */}
      <a
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#5856D6] transition-colors mb-12"
      >
        ← Back to Projects
      </a>

      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1E] tracking-tight mb-4">
        {project.title}
      </h1>
      <p className="text-xl text-gray-500 mb-12 leading-relaxed">
        {project.tagline}
      </p>

      <hr className="border-[#E5E5EA] mb-12" />

      {/* Description */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Overview
        </h2>
        <p className="text-lg text-[#1C1C1E] leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Tools */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Tools &amp; Stack
        </h2>
        <ul className="flex flex-wrap gap-3">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="px-4 py-2 bg-white border border-[#E5E5EA] rounded-full text-sm font-medium text-[#1C1C1E] shadow-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Key Highlights
        </h2>
        <ul className="space-y-3">
          {project.highlights.map((point, i) => (
            <li key={i} className="flex gap-3 text-[#1C1C1E] text-base leading-relaxed">
              <span className="text-[#5856D6] font-bold mt-0.5">→</span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Placeholder screenshot area */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
          Preview
        </h2>
        <div className="w-full rounded-2xl overflow-hidden border border-[#E5E5EA] shadow-md bg-white">
          {/* Browser chrome */}
          <div className="h-8 bg-gray-100 border-b border-[#E5E5EA] flex items-center px-3 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="h-64 bg-gray-50 flex items-center justify-center">
            <span className="text-gray-400 font-medium">
              Add a screenshot here
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
