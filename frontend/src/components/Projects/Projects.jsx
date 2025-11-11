"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.scss";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef([]);

    const projectsItems = [
        {
            id: 1,
            title: "The Full-Service Fitness Hub",
            description:
                "A visually compelling, responsive website built to showcase a diverse range of programs—from Personal Training and Body Building to Ladies-Only hours.",
            imageUrl: "/images/projects/project-1.webp",
            link: "https://repsking.in/",
        },
        {
            id: 2,
            title: "Expert German Education Counseling",
            description:
                "Developed a robust informational website detailing the end-to-end support for studying in Germany, showcasing services from Course Selection and Visa Processing to Settlement Support.",
            imageUrl: "/images/projects/project-2.webp",
            link: "https://edufam-consultancy.vercel.app/",
        },
        {
            id: 3,
            title: "Modern E-commerce Showcase",
            description:
                "A clean, responsive website featuring a detailed product grid, clear price/review display, and essential trust elements like warranty and shipping for consumer confidence.",
            imageUrl: "/images/projects/project-3.webp",
            link: "https://arc-nine-gamma.vercel.app/",
        },
        {
            id: 4,
            title: "The Trusted Traveler's Choice",
            description:
                "A user-friendly digital presence reflecting the brand's commitment to spotless accommodations and warm service, designed to be the definitive booking source for travelers.",
            imageUrl: "/images/projects/project-4.webp",
            link: "https://hotelvarahigrand.com/",
        },
    ];

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const initialBg =
            getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#0F0F0F";
        const projectsBg = "#192023";

        const setBg = (color) => {
            if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.documentElement.style.setProperty("--primary-color", color);
                return;
            }
            gsap.to(document.documentElement, {
                "--primary-color": color,
                duration: 0.3,
                ease: "power2.inOut",
            });
        };

        const bgScrollTrigger = ScrollTrigger.create({
            trigger: el,
            start: "top 0px",
            end: "90% center",
            onEnter: () => setBg(projectsBg),
            onEnterBack: () => setBg(projectsBg),
            onLeave: () => setBg(initialBg),
            onLeaveBack: () => setBg(projectsBg),
            invalidateOnRefresh: true,
        });

        ScrollTrigger.refresh();
        if (bgScrollTrigger && bgScrollTrigger.isActive) {
            setBg(projectsBg);
        }

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                rotateX: -90,
                transformOrigin: "50% 50%",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(descriptionRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                rotateX: -90,
                transformOrigin: "50% 50%",
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: descriptionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(cardsRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".projects-item-section",
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            bgScrollTrigger.kill();
        };
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="projects w-full min-h-screen flex flex-col items-center justify-center"
        >
            <div className="projects-container flex flex-col gap-20 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col md:gap-4 text-center">
                    <h2 ref={titleRef} className="title font-semibold" data-text="Crafted with Purpose">
                        Crafted with <span>Purpose</span>
                    </h2>
                    <p ref={descriptionRef} className="description">
                        A glimpse into the digital experiences we&apos;ve designed and built.
                    </p>
                </div>

                <div className="projects-item-section grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full">
                    {projectsItems.map((item, index) => (
                        <div className="card-wrapper" key={index} ref={(el) => (cardsRef.current[index] = el)}>
                            <div className="card grid grid-rows-[auto_1fr_auto] overflow-hidden items-start gap-5 lg:gap-10 h-full">
                                <div className="image">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                                <div className="content flex flex-col items-start gap-2 lg:gap-5 w-full">
                                    <h3 className="title">{item.title}</h3>
                                    <p className="description">{item.description}</p>
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-button w-full flex justify-start"
                                >
                                    <button>
                                        <span>view project</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;