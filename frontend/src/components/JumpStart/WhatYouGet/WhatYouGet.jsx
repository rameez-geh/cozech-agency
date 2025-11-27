"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhatYouGet.scss";

gsap.registerPlugin(ScrollTrigger);

const WhatYouGet = () => {
    const sectionRef = useRef(null);

    const cardData = [
        {
            title: "Modern Website",
            description: "Landing page or 3–4 pages",
            logo: "/images/jump-to-start/WhatYouGet/logo-1.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "Mobile-first & Fast",
            description: "Clean, responsive, optimized",
            logo: "/images/jump-to-start/WhatYouGet/logo-2.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "Basic SEO",
            description: "Visibility-ready foundation",
            logo: "/images/jump-to-start/WhatYouGet/logo-3.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "1-Month Support",
            description: "Stability after launch",
            logo: "/images/jump-to-start/WhatYouGet/logo-4.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const titleTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".title-section",
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
                defaults: {
                    ease: "power3.out",
                },
            });

            titleTl
                .from(".title-section h2", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                })
                .from(
                    ".title-section .description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                );

            const cards = gsap.utils.toArray(".card");

            gsap.from(cards, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".card-section",
                    start: "top 80%",
                    end: "top 40%",
                    toggleActions: "play none none reverse",
                },
            });
            cards.forEach((card, index) => {
                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    defaults: {
                        ease: "power2.out",
                    },
                });

                const logoImg = card.querySelector(".logo > img");

                cardTl
                    .from(
                        card.querySelector(".logo"),
                        {
                            scale: 0.5,
                            opacity: 0,
                            duration: 0.5,
                        },
                        0.3 + index * 0.1
                    )
                    // .from(
                    //     card.querySelector(".card-style-item"),
                    //     {
                    //         rotation: -180,
                    //         opacity: 0,
                    //         duration: 0.6,
                    //     },
                    //     "-=0.3"
                    // )
                    .from(
                        card.querySelector(".item-2 h3"),
                        {
                            y: 20,
                            opacity: 0,
                            duration: 0.4,
                        },
                        "-=0.2"
                    )
                    .from(
                        card.querySelector(".item-2 p"),
                        {
                            y: 15,
                            opacity: 0,
                            duration: 0.4,
                        },
                        "-=0.2"
                    );

                if (logoImg) {
                    gsap.to(logoImg, {
                        rotation: 360,
                        duration: 20,
                        repeat: -1,
                        ease: "none",
                        transformOrigin: "50% 50%",
                    });
                }

                const hoverTl = gsap.timeline({ paused: true });
                hoverTl.to(card, {
                    y: -10,
                    duration: 0.2,
                    ease: "power1.out",
                });
                card.addEventListener("mouseenter", () => hoverTl.play());
                card.addEventListener("mouseleave", () => hoverTl.reverse());
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="what-you-get" ref={sectionRef} className="what-you-get w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section text-center">
                    <h2 data-text="What You Get">
                        What You <span>Get</span>
                    </h2>
                    <p className="description">
                        A milestone-driven approach that keeps your projects transparent, organized, and stress-free from
                        start to finish.
                    </p>
                </div>

                <div className="card-section w-full">
                    <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {cardData.map((item, index) => (
                            <div key={index} className="card flex flex-col gap-10">
                                <div className="card-bg">
                                    <img src={item.cardBg} alt="Card Background" />
                                </div>
                                <div className="item-1">
                                    <div className="logo">
                                        <div className="card-style-item">
                                            <img src={item.cardStyleItem} alt="Card Style Item" />
                                        </div>
                                        <img className="card-logo" src={item.logo} alt="Logo" />
                                    </div>
                                </div>
                                <div className="item-2 flex flex-col gap-4 overflow-hidden">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
