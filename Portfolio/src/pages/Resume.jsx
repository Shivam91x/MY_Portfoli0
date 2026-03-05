import React from "react";
import { MdCloudDownload } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className="relative mt-16 mb-16 overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(#f3f4f6_1px,transparent_1px),
        linear-gradient(90deg,#f3f4f6_1px,transparent_1px)]
        bg-[size:40px_40px] opacity-40"
      />


      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-2">

        {/* Resume Card */}
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-lg hover:shadow-xl transition">

          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-orange-500 px-4 py-3">

            <h3 className="text-sm font-semibold text-white">
              Resume (PDF Preview)
            </h3>

            <div className="flex gap-2">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-orange-600 shadow-sm hover:scale-105 hover:shadow-md transition"
              >
                <RiFullscreenLine size={16} />
                View Full
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-orange-600 shadow-sm hover:scale-105 hover:shadow-md transition"
              >
                <MdCloudDownload size={16} />
                Download
              </a>

            </div>
          </div>

          {/* PDF Viewer */}
          <div className="h-[70vh] md:h-[85vh] overflow-hidden rounded-b-2xl bg-gray-100">

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