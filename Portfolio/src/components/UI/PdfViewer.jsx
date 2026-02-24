import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  return (
    <div className="rounded-xl border bg-white p-3">
      {/* Controls */}
      <div className="mb-2 flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((p) => p - 1)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            {pageNumber} / {numPages || "—"}
          </span>
          <button
            disabled={!numPages || pageNumber >= numPages}
            onClick={() => setPageNumber((p) => p + 1)}
            className="rounded border px-2 py-1 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.6, s - 0.1))}
            className="rounded border px-2 py-1"
          >
            −
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.1))}
            className="rounded border px-2 py-1"
          >
            +
          </button>
        </div>
      </div>

      {/* PDF */}
      <div className="flex justify-center overflow-auto">
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="text-sm text-gray-500">Loading PDF…</p>}
          error={<p className="text-sm text-red-500">Failed to load PDF.</p>}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
}