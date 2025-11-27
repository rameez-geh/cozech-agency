"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhoCanApply.scss";

const WhoCanApply = () => {
    const sectionRef = useRef(null);

    const itemsImage = [
        {
            image: "/images/jump-to-start/WhoCanApply/item-2.svg",
            name: "Boutique Clothing Stores",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-3.svg",
            name: "Beauty Salons",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-4.svg",
            name: "Fitness Studio",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-5.svg",
            name: "Clinics",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-6.svg",
            name: "Real Estate",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-7.svg",
            name: "Contractors",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-8.svg",
            name: "Photography",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-9.svg",
            name: "Home Bakeries",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-10.svg",
            name: "Pet Care Service",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-11.svg",
            name: "Restaurant",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-12.svg",
            name: "Jewelry Shop",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-13.svg",
            name: "Auto Care",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-14.svg",
            name: "Coaching Institutions",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-15.svg",
            name: "Travel Agencies",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-1.svg",
            name: "Cafes & Coffee Shops",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-16.svg",
            name: "Furniture Showrooms",
        },
    ];

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

            tl.from(".title-section h2", {
                y: 50,
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
            })
                .from(
                    ".title-section .description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.5"
                )
                .from(
                    ".item",
                    {
                        y: 40,
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.5,
                        stagger: {
                            each: 0.08,
                            from: "random",
                        },
                    },
                    "-=0.3"
                )
                .from(
                    ".icon-image",
                    {
                        scale: 0,
                        rotation: -180,
                        opacity: 0,
                        duration: 0.6,
                        stagger: {
                            each: 0.05,
                            from: "center",
                        },
                    },
                    "-=0.8"
                )
                .from(
                    ".paragraph-section",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.3"
                )
                .from(
                    ".paragraph-section span",
                    {
                        color: "inherit",
                        scale: 1.1,
                        duration: 0.4,
                    },
                    "-=0.2"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="who-can-apply" ref={sectionRef} className="who-can-apply w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-center justify-center">
                    <h2 data-text="Who Can Apply?">
                        Who <span>Can Apply?</span>
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>

                <div className="items-section w-full lg:w-fit">
                    <div className="items-wrapper grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                        {itemsImage.map((item, index) => (
                            <div key={index} className="item flex items-center justify-center">
                                <div className="icon-item">
                                    <img className="icon-image" src={item.image} alt="Icon" />
                                    <span className="item-name">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="paragraph-section">
                    <p>
                        These are examples. We work with all kinds of businesses.{" "}
                        <span className="cursor-pointer" onClick={handleApplyClick}>
                            Join the waitlist.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoCanApply;
