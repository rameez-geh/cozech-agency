"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ClipboardCheck } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
    const containerRef = useRef(null);
    const freeTextRef = useRef(null);

    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScrApDpKPJs6fVZuL4KZ2EZsYtEfPkoAq22UmsjnqNJe1PfWw/viewform?usp=sharing&ouid=114158827343874682983";

    const handleApplyClick = () => {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(SplitText);

        let ctx = gsap.context(() => {
            // Split text for main title
            const split = new SplitText(".main-title", {
                type: "chars",
                charsClass: "char",
            });

            split.chars.forEach((char) => {
                char.setAttribute("data-char", char.innerText);
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".hero-bg-image", {
                opacity: 0,
                scale: 1.05,
                duration: 1.2,
            })

                .from(
                    ".logo",
                    {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.6,
                    },
                    "-=0.8"
                )

                .from(
                    ".main-title-wrapper h3",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.4"
                )

                .from(
                    split.chars,
                    {
                        y: 50,
                        opacity: 0,
                        stagger: 0.03,
                        duration: 0.5,
                    },
                    "-=0.3"
                )

                .from(
                    ".sub-title-section .subtitle",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.2"
                )

                .from(
                    ".sub-title-section p",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.4"
                )

                .from(
                    ".cta-section .apply-btn",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                )

                .from(
                    ".cta-section p",
                    {
                        opacity: 0,
                        duration: 0.4,
                    },
                    "-=0.2"
                )

                .from(
                    ".style-1",
                    {
                        opacity: 0,
                        x: 30,
                        rotation: 10,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.5"
                );

            // Infinite waving animation for "Free" text
            if (freeTextRef.current) {
                gsap.to(freeTextRef.current, {
                    rotation: 15,
                    transformOrigin: "bottom center",
                    duration: 0.3,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 0.1,
                });
            }
        }, containerRef);

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

            <div className="style-item-2"></div>
            <div className="gradient-overlay absolute inset-0 pointer-events-none" />

            <div className="container relative z-10 w-full mx-auto h-full flex items-center justify-center">
                <div className="section-wrapper w-full h-full flex flex-col items-center justify-center gap-10 md:gap-14">
                    <div className="title-section flex flex-col justify-center items-center gap-10 w-full">
                        <div className="main-title-section flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                                <h4>
                                    Build a Premium Website -{" "}
                                    <span ref={freeTextRef} className="highlight-free" style={{ display: "inline-block" }}>
                                        Free
                                    </span>
                                </h4>
                            </div>
                            <p>Selected for 3 growing businesses. Fast, modern, and fully supported</p>
                        </div>
                        <div className="style-1 hidden lg:block">
                            <img src="/images/jump-to-start/Hero/style-item-1.svg" alt="Style 1" />
                        </div>
                    </div>

                    <div className="cta-section flex flex-col items-center gap-3">
                        <div className="apply-btn">
                            <button onClick={handleApplyClick} className="flex items-center gap-2">
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
