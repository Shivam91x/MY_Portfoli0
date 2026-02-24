import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
<section className="mt-10 mb-10 ">
  {/* Outer container to control page width */}
  <div className="mx-auto max-w-4xl px-2">
    {/* Card */}
    <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-orange-500 px-4 py-2">
        <h3 className="text-sm font-semibold text-white">
          Resume (PDF Preview)
        </h3>
        <a
          href="/resume.pdf"
          download
          className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-orange-600 hover:bg-white"
        >
          Download
        </a>
      </div>

      {/* Viewer wrapper: height controlled */}
      <div className="h-[65vh]  min-h-[820px] overflow-hidden rounded-b-2xl bg-orange">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/resume.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  </div>
</section>
  );
}