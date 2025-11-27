"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./JumpStartCTA.scss";

const JumpStartCTA = () => {
    const sectionRef = useRef(null);

    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScrApDpKPJs6fVZuL4KZ2EZsYtEfPkoAq22UmsjnqNJe1PfWw/viewform?usp=sharing&ouid=114158827343874682983";

    const handleApplyClick = () => {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    };

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "top 25%",
                    toggleActions: "play none none reverse",
                },
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".left", {
                x: -100,
                opacity: 0,
                rotation: -15,
                duration: 1,
            })
                .from(
                    ".right",
                    {
                        x: 100,
                        opacity: 0,
                        rotation: 15,
                        duration: 1,
                    },
                    "<"
                )
                .from(
                    ".title",
                    {
                        y: 60,
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.8,
                    },
                    "-=0.7"
                )
                .from(
                    ".description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.5"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="jump-start-cta"
            ref={sectionRef}
            className="jump-start-cta w-full lg:min-h-screen flex flex-col items-center justify-center"
        >
            <div className="cta-container flex flex-col md:gap-6 justify-center items-center max-w-7xl w-full mx-auto">
                <img src="/images/CTA/svg/svgImage-1.svg" alt="Icon" className="left absolute top-0 left-0" />
                <img src="/images/CTA/svg/svgImage-2.svg" alt="Icon" className="right absolute top-0 right-0" />
                <div className="title-section w-full flex flex-col gap-8 md:gap-12 p-4">
                    <div className="text-section flex flex-col gap-2 md:gap-4 text-center ">
                        <h2 className="title font-semibold" data-text="Ready to Jumpstart Your Website?">
                            Ready to Jumpstart Your Website?
                        </h2>
                        <p className="description">Let's create your online beginning.</p>
                    </div>
                    <div className="button-section flex flex-col items-center gap-4">
                        <div className="buttons flex gap-4">
                            <button onClick={handleApplyClick} type="button" className="btn1">
                                <span>Apply Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="image-section w-full">
                    <div className="cta-image-wrapper">
                        <img src="/images/CTA/cta-image-2.webp" alt="Decorative" className="cta-bottom-image" />
                    </div>
                    <div className="bars flex"></div>
                </div>
            </div>
        </section>
    );
};

export default JumpStartCTA;
