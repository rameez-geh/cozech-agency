"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ isVisible = true, onComplete }) {
  const spinnerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!spinnerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(spinnerRef.current, {
        rotate: 360,
        duration: 1.2,
        repeat: -1,
        ease: "linear",
      });
    }, spinnerRef); 

    return () => ctx.revert(); 
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (!isVisible && typeof onComplete === "function") onComplete();
      },
    });

    if (isVisible) {
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }

  }, [isVisible, onComplete]);

  return (
    <div
      ref={overlayRef}
      className={`
        fixed inset-0 flex items-center justify-center
        bg-primary/90 dark:bg-primary/95
        z-50 transition-opacity
      `}
      aria-live="polite"
      aria-busy="true"
    >


      <div className="flex flex-col items-center gap-4">
        <div
          ref={spinnerRef}
          className={`
            w-16 h-16 rounded-full border-4 border-gray-400
            border-t-black
          `}
        />
      </div>
    </div>
  );
}