import React from "react";

export default function LaptopFrame({ children }) {
  return (
    <div className="mx-auto mt-10 max-w-5xl">
      {/* Screen Bezel */}
      <div className="relative mx-auto rounded-2xl bg-slate-800 p-3 shadow-2xl">
        {/* Camera notch */}
        <div className="absolute left-1/2 top-1 -translate-x-1/2 h-1.5 w-12 rounded-full bg-slate-700" />

        {/* Screen */}
        <div className="rounded-xl bg-black p-4">
          {children}
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative mx-auto mt-1 h-4 w-[85%] rounded-b-2xl bg-slate-700 shadow-lg">
        {/* Trackpad */}
        <div className="absolute left-1/2 top-1/2 h-2 w-24 -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-600" />
      </div>
    </div>
  );
}