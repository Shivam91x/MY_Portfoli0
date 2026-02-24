import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-slate-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
}
