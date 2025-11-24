"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ClipboardCheck } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const split = new SplitText(".main-title", {
                type: "chars",
                charsClass: "char",
            });

            split.chars.forEach((char) => {
                char.setAttribute("data-char", char.innerText);
            });

            gsap.from(split.chars, { y: 50, opacity: 0, stagger: 0.05 });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            id="jump-start-hero"
            ref={containerRef}
            className="jump-start-hero relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="hero-bg-image">
                <img src="/images/jump-to-start/Hero/hero-bg.svg" alt="Hero Background" />
            </div>
            <div className="container relative z-10 w-full mx-auto h-full flex items-center justify-center">
                <div className="section-wrapper w-full h-full flex flex-col items-center justify-center gap-10 md:gap-14">
                    <div className="title-section flex flex-col justify-center items-center gap-10 w-full">
                        <div className="main-title-section flex items-center gap-8">
                            <div className="logo">
                                <img src="/images/jump-to-start/Hero/hero-logo.svg" alt="Hero Logo" />
                            </div>
                            <div className="main-title-wrapper">
                                <h3>COZECH</h3>
                                <h1 className="main-title">JUMPSTART</h1>
                            </div>
                        </div>
                        <div className="sub-title-section flex flex-col gap-4">
                            <div className="subtitle">
                                <h4>Build a Premium Website - Free</h4>
                            </div>
                            <p>Selected for 3 growing businesses. Fast, modern, and fully supported</p>
                        </div>
                        <div className="style-1">
                            <img src="/images/jump-to-start/Hero/style-item-1.svg" alt="Style 1" />
                        </div>
                    </div>

                    <div className="cta-section flex flex-col items-center gap-3">
                        <div className="apply-btn">
                            <button className="flex items-center gap-2">
                                <span>Apply now</span>
                                <ClipboardCheck size={16} stroke="#e99132" />
                            </button>
                        </div>
                        <p>3 spots only</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
