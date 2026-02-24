import SectionHeading from "../components/UI/SectionHeading";
import ProjectCard from "../components/UI/ProjectCard";

const projects = [
  {
    title: "E-commerce Frontend",
    image: "/demo.png",
    description: "A responsive shopping UI with filtering, cart flow, and modern product discovery experience.",
    stack: ["React", "Tailwind CSS", "React Router"],
    liveUrl: "https://example.com/live-project-1",
    githubUrl: "https://github.com/example/project-1",
  },
  {
    title: "Freelance Business Landing",
    image: "/ServiceBg.png",
    description: "Conversion-focused landing page built for a small business client with clear CTAs and fast loading.",
    stack: ["Vite", "React", "Tailwind CSS"],
    liveUrl: "https://example.com/live-project-2",
    githubUrl: "https://github.com/example/project-2",
  },
  {
    title: "Task Dashboard",
    image: "/demo.png",
    description: "A dashboard interface with reusable UI components, analytics cards, and responsive layouts.",
    stack: ["React", "Context API", "Chart UI"],
    liveUrl: "https://example.com/live-project-3",
    githubUrl: "https://github.com/example/project-3",
  },
];

export default function Projects() {
  return (
    <section className="py-12">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A few portfolio highlights showing clean code structure, polished UI, and practical business-focused solutions."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
