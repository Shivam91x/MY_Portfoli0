import { useEffect, useRef } from "react";
import React from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let velocityX = 0;
  let velocityY = 0;

  useEffect(() => {
    const cursor = cursorRef.current;
    const FRICTION = 0.08;
    const MAX_VELOCITY = 50;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const follow = () => {
      if (!cursor) return;
              
      // Calculate direction to mouse
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      // Smooth following without bounce
      velocityX = dx * 0.12;
      velocityY = dy * 0.12;

      // Update position
      cursorX += velocityX;
      cursorY += velocityY;

      // Calculate speed for shrink effect
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      const speedRatio = Math.min(speed / MAX_VELOCITY, 1);
      
      // Shrink when fast (0.6 to 1.0 scale)
      const scale = 1 - speedRatio * 0.4;

      // Apply position and scale
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      cursor.style.transform = `translate(-50%, -50%) scale(${scale})`;

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
