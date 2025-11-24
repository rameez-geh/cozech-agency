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

        // --- Entrance animations ---
        gsap.set(titleRef.current, { opacity: 0, y: 80 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 40 });
        gsap.set(carouselRef.current, { opacity: 0, y: 60 });

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
            .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")
            .to(carouselRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.3");

        // --- Carousel animation init ---
        const initAnimation = () => {
            if (animationRef.current) {
                animationRef.current.kill();
                animationRef.current = null;
            }

            const firstCard = container.querySelector(".card");
            if (!firstCard) return;

            // compute gap from CSS (fallback to 12)
            const containerStyles = window.getComputedStyle(container);
            const gap = parseInt(containerStyles.gap) || 12;

            const cardWidth = firstCard.offsetWidth;
            const singleSetWidth = (cardWidth + gap) * testimonialItems.length;

            // position container so the "middle" set is visible (works with duplicatedItems)
            gsap.set(container, { x: -singleSetWidth });

            animationRef.current = gsap.to(container, {
                x: `-=${singleSetWidth}`,
                duration: 24,
                ease: "none",
                repeat: -1,
                force3D: true,
                modifiers: {
                    x: (x) => {
                        // keep x within [-singleSetWidth, 0)
                        const value = parseFloat(x);
                        return ((value + singleSetWidth) % singleSetWidth) - singleSetWidth + "px";
                    },
                },
            });
        };

        // small delay to ensure DOM has rendered
        let initTimeout = setTimeout(initAnimation, 100);

        // --- Pause / Resume controls ---
        const pauseAnimation = () => {
            if (animationRef.current && !animationRef.current.paused()) {
                animationRef.current.pause();
            }
        };
        const resumeAnimation = () => {
            if (animationRef.current && animationRef.current.paused()) {
                animationRef.current.resume();
            }
        };

        // Introduce a small resume delay to avoid resuming while user is still scrolling
        let resumeTimeout = null;
        const scheduleResume = (delay = 150) => {
            clearTimeout(resumeTimeout);
            resumeTimeout = setTimeout(() => {
                resumeAnimation();
                resumeTimeout = null;
            }, delay);
        };
        const cancelScheduledResume = () => {
            if (resumeTimeout) {
                clearTimeout(resumeTimeout);
                resumeTimeout = null;
            }
        };

        // Mouse handlers (desktop)
        const onMouseEnter = () => {
            cancelScheduledResume();
            pauseAnimation();
        };
        const onMouseLeave = () => {
            scheduleResume(50);
        };

        // Pointer handlers (recommended cross-device)
        const onPointerEnter = (e) => {
            // pause for any pointer (mouse/touch/pen)
            cancelScheduledResume();
            pauseAnimation();
        };
        const onPointerLeave = () => {
            scheduleResume(100);
        };
        const onPointerDown = () => {
            cancelScheduledResume();
            pauseAnimation();
        };
        const onPointerUp = () => {
            // small delay to avoid interfering with scroll gestures
            scheduleResume(120);
        };
        const onPointerCancel = () => {
            scheduleResume(120);
        };

        // Touch fallback for older browsers
        const onTouchStart = () => {
            cancelScheduledResume();
            pauseAnimation();
        };
        const onTouchEnd = () => {
            scheduleResume(200);
        };
        const onTouchCancel = () => {
            scheduleResume(200);
        };

        // Visibility change: pause when tab is hidden
        const onVisibilityChange = () => {
            if (document.hidden) {
                pauseAnimation();
            } else {
                // resume when user returns
                scheduleResume(100);
            }
        };

        // Attach listeners (use pointer events where available)
        container.addEventListener("mouseenter", onMouseEnter);
        container.addEventListener("mouseleave", onMouseLeave);

        container.addEventListener("pointerenter", onPointerEnter);
        container.addEventListener("pointerleave", onPointerLeave);
        container.addEventListener("pointerdown", onPointerDown);
        container.addEventListener("pointerup", onPointerUp);
        container.addEventListener("pointercancel", onPointerCancel);

        // touch listeners: passive for touchstart so scrolling isn't blocked
        container.addEventListener("touchstart", onTouchStart, { passive: true });
        container.addEventListener("touchend", onTouchEnd);
        container.addEventListener("touchcancel", onTouchCancel);

        document.addEventListener("visibilitychange", onVisibilityChange);

        // --- Resize handling (re-init animation after resize) ---
        let resizeTimeout;
        const onResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                initAnimation();
            }, 150);
        };
        window.addEventListener("resize", onResize);

        // --- Cleanup on unmount ---
        return () => {
            // clear timeouts
            clearTimeout(initTimeout);
            clearTimeout(resizeTimeout);
            clearTimeout(resumeTimeout);
            initTimeout = null;

            // remove event listeners
            container.removeEventListener("mouseenter", onMouseEnter);
            container.removeEventListener("mouseleave", onMouseLeave);

            container.removeEventListener("pointerenter", onPointerEnter);
            container.removeEventListener("pointerleave", onPointerLeave);
            container.removeEventListener("pointerdown", onPointerDown);
            container.removeEventListener("pointerup", onPointerUp);
            container.removeEventListener("pointercancel", onPointerCancel);

            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchend", onTouchEnd);
            container.removeEventListener("touchcancel", onTouchCancel);

            document.removeEventListener("visibilitychange", onVisibilityChange);
            window.removeEventListener("resize", onResize);


            try {
                tl && tl.kill();
            } catch (e) {}
            if (animationRef.current) {
                try {
                    animationRef.current.kill();
                } catch (e) {}
                animationRef.current = null;
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
