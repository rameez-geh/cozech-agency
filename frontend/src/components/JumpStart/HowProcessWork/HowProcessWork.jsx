"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HowProcessWork.scss";

const HowProcessWork = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    const processItems = [
        {
            icon: "/images/jump-to-start/HowProcessWork/icon-1.svg",
            label: "Apply",
        },
        {
            icon: "/images/jump-to-start/HowProcessWork/icon-2.svg",
            label: "Short call",
        },
        {
            icon: "/images/jump-to-start/HowProcessWork/icon-3.svg",
            label: "Design",
        },
        {
            icon: "/images/jump-to-start/HowProcessWork/icon-4.svg",
            label: "Development",
        },
        {
            icon: "/images/jump-to-start/HowProcessWork/icon-5.svg",
            label: "Launch",
        },
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                },
                defaults: {
                    ease: "power2.out",
                },
            });

            tl.from(".title-section h2", {
                y: 30,
                opacity: 0,
                duration: 0.6,
            })
                .from(
                    ".title-section .description",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                )
                .from(
                    ".item",
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    "-=0.2"
                );

            itemsRef.current.forEach((item) => {
                if (!item) return;

                const handleMouseEnter = () => {
                    gsap.to(item, {
                        scale: 0.95,
                        duration: 0.25,
                        ease: "power2.out",
                    });
                };

                const handleMouseLeave = () => {
                    gsap.to(item, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power2.out",
                    });
                };

                item.addEventListener("mouseenter", handleMouseEnter);
                item.addEventListener("mouseleave", handleMouseLeave);

                item._handleMouseEnter = handleMouseEnter;
                item._handleMouseLeave = handleMouseLeave;
            });
        }, sectionRef);

        return () => {
            itemsRef.current.forEach((item) => {
                if (!item) return;
                item.removeEventListener("mouseenter", item._handleMouseEnter);
                item.removeEventListener("mouseleave", item._handleMouseLeave);
            });
            ctx.revert();
        };
    }, []);

    return (
        <section
            id="how-process-work"
            ref={sectionRef}
            className="how-process-work w-full flex items-center justify-center"
        >
            <div className="container flex flex-col gap-5 md:gap-10 lg:gap-16 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-center justify-center">
                    <h2 data-text="How Process Work?">
                        How <span>Process Work?</span>
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>

                <div className="process-items-section w-full">
                    <div
                        className="items-wrapper
                    flex flex-wrap justify-between gap-4 
                    lg:grid lg:grid-cols-5 lg:justify-between"
                    >
                        {processItems.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemsRef.current[index] = el)}
                                className="item flex flex-col items-center justify-center gap-4 cursor-pointer"
                            >
                                <div className="icon">
                                    <div className="icon-style-item">
                                        <img
                                            src="/images/jump-to-start/HowProcessWork/icon-style-item.svg"
                                            alt="Icon Style Item"
                                        />
                                    </div>
                                    <img className="icon-image" src={item.icon} alt="Icon" />
                                </div>
                                <div className="label">
                                    <h4>{item.label}</h4>
                                </div>
                                <div className="line"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowProcessWork;
