import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/UI/SectionHeading";

export default function Resume() {
  return (
    <section className="py-12">
      <SectionHeading
        eyebrow="Resume"
        title="Frontend Developer Resume"
        description="A web version of my resume for quick review. You can also download the PDF."
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <h3 className="text-2xl font-bold">Your Name</h3>
            <p className="mt-2 text-slate-600">React.js Frontend Developer</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><FaEnvelope /> youremail@example.com</span>
              <span className="inline-flex items-center gap-2"><FaLinkedin /> linkedin.com/in/yourprofile</span>
              <span className="inline-flex items-center gap-2"><FaGithub /> github.com/yourprofile</span>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Download PDF <FaDownload />
          </a>
        </div>

        <div className="grid gap-8 pt-6 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold">Experience</h4>
            <div className="mt-3 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-900">Freelance Frontend Developer</p>
                <p>2023 – Present</p>
                <p>Developed responsive React websites for clients with reusable components and performance optimizations.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Skills</h4>
            <p className="mt-3 text-sm text-slate-600">React.js, JavaScript, Tailwind CSS, HTML5, CSS3, Responsive Design, Git, REST APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
