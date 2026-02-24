import { useEffect, useRef } from "react";
import React from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    const cursor = cursorRef.current;
    const SMOOTHING = 0.08; // 👈 increase/decrease delay here

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const follow = () => {
      if (!cursor) return;

      const x = cursor.offsetLeft;
      const y = cursor.offsetTop;

      cursor.style.left = x + (mouseX - x) * SMOOTHING + "px";
      cursor.style.top = y + (mouseY - y) * SMOOTHING + "px";

      requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", move);
    follow();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}