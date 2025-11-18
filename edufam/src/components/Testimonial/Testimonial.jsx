"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User } from "lucide-react";
import "./Testimonial.scss";

gsap.registerPlugin(ScrollTrigger);

const testimonialItems = [
    {
        id: 1,
        logo: "/images/testimonial/edufam.svg",
        description:
            "I didn't know what features I actually needed. They explained everything patiently, didn't push unnecessary things. Felt like they understood small businesses",
        name: "Musthafa",
        company: "Co-Founder of Edufam",
    },
    {
        id: 2,
        logo: "/images/testimonial/hotel-varahi.svg",
        description:
            "I was worried about the cost going up midway. Fixed price from day one, and they kept making changes till I was satisfied. Fair deal overall.",
        name: "Ravi",
        company: "Owner of Hotel Varahi Grand",
    },
    {
        id: 3,
        logo: "/images/testimonial/arc.svg",
        description:
            "They didn't just finish and leave. Kept working on it until it looked right. No pushback when I asked for changes. That made the difference",
        name: "Muhammed Rameez",
        company: "CEO of ARC",
    },
    {
        id: 4,
        logo: "/images/testimonial/reps-king.svg",
        description:
            "They gave me one price at the start. I paid after each part was done and approved. No confusion, no extra bills later. That's all I wanted.",
        name: "Abdul Razak",
        company: "Founder of RepsKing",
    },
];

const Testimonial = () => {
    const sectionRef = useRef(null);
    const itemContainerRef = useRef(null);
    const animationRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const carouselRef = useRef(null);
    
    const duplicatedItems = [...testimonialItems, ...testimonialItems, ...testimonialItems];

    useEffect(() => {
        const section = sectionRef.current;
        const container = itemContainerRef.current;
        if (!section || !container) return;

        // Initial state for scroll-triggered animations
        gsap.set(titleRef.current, { opacity: 0, y: 80 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 40 });
        gsap.set(carouselRef.current, { opacity: 0, y: 60 });

        // Scroll-triggered timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
            },
        });

        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        })
            .to(
                descriptionRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.5"
            )
            .to(
                carouselRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power2.out",
                },
                "-=0.3"
            );

        // Carousel animation
        const initAnimation = () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }

            const firstCard = container.querySelector(".card");
            if (!firstCard) return;

            const containerStyles = window.getComputedStyle(container);
            const gap = parseInt(containerStyles.gap) || 12;

            const cardWidth = firstCard.offsetWidth;
            const singleSetWidth = (cardWidth + gap) * testimonialItems.length;

            gsap.set(container, { x: -singleSetWidth });

            animationRef.current = gsap.to(container, {
                x: `-=${singleSetWidth}`,
                duration: 24,
                ease: "none",
                repeat: -1,
                force3D: true,
                modifiers: {
                    x: (x) => {
                        const value = parseFloat(x);
                        return ((value + singleSetWidth) % singleSetWidth) - singleSetWidth + "px";
                    },
                },
            });
        };

        const timeoutId = setTimeout(initAnimation, 100);

        // Pause on hover
        const handleMouseEnter = () => {
            if (animationRef.current) animationRef.current.pause();
        };

        const handleMouseLeave = () => {
            if (animationRef.current) animationRef.current.resume();
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Handle resize
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initAnimation, 150);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            tl.kill();

            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="testimonial"
            className="testimonial w-full md:min-h-screen flex flex-col items-center justify-center"
        >
            <div className="testimonial-container flex flex-col gap-20 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col md:gap-4 text-center">
                    <h2 ref={titleRef} className="title font-semibold" data-text="Results That Speak">
                        Results That <span>Speak</span>
                    </h2>
                    <p ref={descriptionRef} className="description">
                        Here's what our clients have to say about working with us.
                    </p>
                </div>

                <div ref={carouselRef} className="carousal-section w-full">
                    <div className="fade-overlay fade-left"></div>
                    <div className="fade-overlay fade-right"></div>
                    <div ref={itemContainerRef} className="items-container flex items-center gap-3 md:gap-4">
                        {duplicatedItems.map(({ id, logo, description, name, company }, index) => (
                            <div key={`${id}-${index}`} className="card flex flex-col gap-2 md:gap-4">
                                <div className="item-1">
                                    <div className="content-wrapper flex flex-col justify-between gap-1 sm:gap-2 md:gap-6">
                                        <div className="logo ">
                                            <img
                                                className=""
                                                style={{ height: id === 3 ? "30px" : "60px" }}
                                                src={logo}
                                                alt="Client Logo"
                                            />
                                        </div>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="arrow">
                                        <img src="/images/testimonial/down-arrow.svg" alt="Down-arrow" />
                                    </div>
                                    <div className="card-bg">
                                        <img src="/images/testimonial/card-bg.png" alt="Card-bg" />
                                    </div>
                                </div>
                                <div className="item-2 flex gap-2">
                                    {/* <div className="profile flex items-center">
                                        <User className="user-icon" size={25} />
                                    </div> */}
                                    <div className="text-wrapper">
                                        <div className="name">{name}</div>
                                        <div className="company">{company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;