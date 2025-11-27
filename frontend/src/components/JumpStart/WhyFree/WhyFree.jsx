"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyFree.scss";

const WhyFree = () => {
    const sectionRef = useRef(null);

    const itemsData = [
        {
            title: "Build strong case studies",
            image: "/images/jump-to-start/WhyFree/item-1.svg",
        },
        {
            title: "Deliver clear, real results",
            image: "/images/jump-to-start/WhyFree/item-2.svg",
        },
        {
            title: "Develop lasting partnerships",
            image: "/images/jump-to-start/WhyFree/item-3.svg",
        },
    ];

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

            tl.from(".title-section h2", {
                x: -60,
                opacity: 0,
                duration: 0.8,
            })
                .from(
                    ".title-section .description",
                    {
                        x: -40,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.5"
                )
                .from(
                    ".item",
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.15,
                    },
                    "-=0.3"
                )
                .from(
                    ".icon-image",
                    {
                        scale: 0.5,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    "-=0.6"
                )
                .from(
                    ".icon-style-item",
                    {
                        rotation: -90,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                    },
                    "-=0.4"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="why-free" ref={sectionRef} className="why-free w-full flex items-center justify-center">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-center lg:items-start justify-start lg:col-span-5">
                    <h2 data-text="Why Free?">
                        Why <span>Free?</span>
                    </h2>
                    <p className="description">We're launching our studio and selecting 3 brands to:</p>
                </div>

                <div className="items-section overflow-hidden lg:col-span-7">
                    <div className="items-wrapper grid grid-cols-1 md:grid-cols-3 gap-10">
                        {itemsData.map((item, index) => (
                            <div key={index} className="item flex flex-col items-center justify-center gap-2">
                                <div className="icon-item">
                                    <img className="icon-image" src={item.image} alt="Icon" />
                                    <div className="icon-style-item">
                                        <img src="/images/jump-to-start/WhyFree/icon-style-item.svg" alt="Icon style" />
                                    </div>
                                </div>
                                <div className="text-item">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFree;
