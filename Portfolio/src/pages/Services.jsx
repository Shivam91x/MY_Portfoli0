import { FaCode, FaLaptopCode, FaPlug } from "react-icons/fa";
import SectionHeading from "../components/UI/SectionHeading";

const services = [
  {
    title: "Frontend Development",
    description: "Responsive websites and dashboards using React, Tailwind CSS, and modern component architecture.",
    icon: FaLaptopCode,
  },
  {
    title: "Freelancing Support",
    description: "Landing pages, business sites, and iterative UI improvements tailored for client goals.",
    icon: FaCode,
  },
  {
    title: "API Integration",
    description: "Connect frontend apps with REST APIs, handle state, loading, and error UI with clean patterns.",
    icon: FaPlug,
  },
];

export default function Services() {
  return (
    <section className="py-12">
      <SectionHeading
        eyebrow="Services"
        title="What I can help you with"
        description="From pixel-perfect UIs to production-ready React apps, I offer focused frontend services for teams and clients."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="text-2xl text-orange-500" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
