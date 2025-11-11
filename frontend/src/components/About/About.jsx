"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
    {
        id: 1,
        title: "Transparent Payments",
    },
    {
        id: 2,
        title: "No Hidden Fees",
    },
    {
        id: 3,
        title: "Focused Team",
    },
    {
        id: 4,
        title: "Ongoing Support",
    },
];

const About = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            titleRef.current,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
                transformOrigin: "50% 50%",
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transformOrigin: "50% 50%",
                duration: 1,
                ease: "power2.out",
            }
        );

        tl.fromTo(
            descriptionRef.current,
            {
                opacity: 0,
                y: 40,
                rotateX: -90,
                transformOrigin: "50% 50%",
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transformOrigin: "50% 50%",
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.5"
        );

        tl.fromTo(
            itemsRef.current,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
            },
            "-=0.3"
        );

    });

    return (
        <section
            ref={containerRef}
            id="about"
            className="about w-full lg:min-h-screen flex flex-col items-center justify-center"
        >
            <div className="about-container flex flex-col gap-10 md:gap-16 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section w-full flex flex-col gap-2 md:gap-5 text-center">
                    <h2 ref={titleRef} className="title font-semibold" data-text="Why Choose COZECH">
                        Why Choose <span>COZECH</span>{" "}
                    </h2>
                    <p ref={descriptionRef} className="description">
                        Smart solutions. Clear process. Lasting results.
                    </p>
                </div>

                <div className="about-items-section grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 w-full">
                    {aboutItems.map((item, index) => (
                        <div className="item-wrapper" key={item.id} ref={(el) => (itemsRef.current[index] = el)}>
                            <div className="item flex items-center gap-5 md:gap-10">
                                <div className="number">
                                    <h2 data-text={String(index + 1).padStart(2, "0")}>
                                        {String(index + 1).padStart(2, "0")}
                                    </h2>
                                </div>
                                <div className="title">
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;