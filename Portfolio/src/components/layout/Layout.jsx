import React from "react";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(#f3f4f6_1px,transparent_1px),
        linear-gradient(90deg,#f3f4f6_1px,transparent_1px)]
        bg-[size:40px_40px] opacity-40"
      />

      {/* GLOW BLOBS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-300 rounded-full blur-[120px] opacity-40"></div>

      {/* WEBSITE CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}