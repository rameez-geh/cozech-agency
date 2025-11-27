"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import "./Description.scss";

const Description = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        let split;
        let tl;
        let ctx = gsap.context(() => {
            const setupAnimation = () => {
                if (split) split.revert();
                if (tl) tl.kill();

                split = new SplitText(".content h6", {
                    type: "lines,words",
                    linesClass: "line",
                    wordsClass: "word",
                });

                // wrap each line
                split.lines.forEach((line) => {
                    const wrapper = document.createElement("div");
                    wrapper.classList.add("line-wrapper");
                    line.parentNode.insertBefore(wrapper, line);
                    wrapper.appendChild(line);
                });

                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    },
                    defaults: { ease: "power3.out" },
                });

                tl.from(split.lines, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                });

                ScrollTrigger.refresh();
            };

            setupAnimation();

            const onResize = () => setupAnimation();
            window.addEventListener("resize", onResize);

            return () => {
                window.removeEventListener("resize", onResize);
                if (split) split.revert();
                if (tl) tl.kill();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="description" ref={sectionRef} className="description w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="content w-full">
                    <h6>
                        <span className="font-extrabold text-[#f8f8f8]">Cozech</span> Jumpstart is a fast-track website
                        initiative where we build a high-quality, conversion-focused site for selected small businesses —
                        free of cost. We handle the strategy, design, and development. You focus on running your business.
                    </h6>
                </div>
            </div>
        </section>
    );
};

export default Description;
