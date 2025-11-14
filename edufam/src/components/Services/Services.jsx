"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.scss";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 1,
        title: "web development",
        description:
            "We create responsive, high-performing websites that blend functionality with design. Whether you're launching your first site or scaling up, we build experiences that convert and grow with you.",
        icon: (
            <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3715 0.259515C17.7983 0.497434 18.0078 0.995722 17.8792 1.4671L15.0577 11.8125H25.3542C25.7773 11.8125 26.16 12.0635 26.3286 12.4516C26.4973 12.8396 26.4196 13.2907 26.1309 13.6L11.2559 29.5375C10.9225 29.8947 10.3885 29.9785 9.96178 29.7406C9.53503 29.5026 9.32555 29.0044 9.4541 28.533L12.2756 18.1875H1.97916C1.55608 18.1875 1.17332 17.9365 1.0047 17.5485C0.836076 17.1605 0.91374 16.7094 1.20242 16.4001L16.0774 0.462573C16.4108 0.105385 16.9448 0.0215962 17.3715 0.259515Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Mobile App Development",
        description:
            "Custom apps designed to scale with your business. We focus on usability, performance, and seamless experiences across iOS and Android.",
        icon: (
            <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3647 1.23814C14.1922 1.0068 13.933 0.855585 13.6468 0.819251C13.3605 0.782917 13.0717 0.864591 12.8469 1.0455C10.1975 3.17733 8.34965 6.2701 7.83373 9.79563C6.90359 9.12135 6.08666 8.29984 5.41743 7.36525C5.23332 7.10815 4.94427 6.94641 4.62884 6.92401C4.31342 6.90161 4.00441 7.02086 3.78581 7.24936C1.5965 9.53786 0.25 12.6438 0.25 16.0619C0.25 23.1036 5.95837 28.8119 13 28.8119C20.0416 28.8119 25.75 23.1036 25.75 16.0619C25.75 10.8757 22.6536 6.41492 18.213 4.42319C16.6417 3.65607 15.3441 2.55146 14.3647 1.23814ZM18.3125 18.1875C18.3125 21.1215 15.934 23.5 13 23.5C10.066 23.5 7.6875 21.1215 7.6875 18.1875C7.6875 17.6076 7.78041 17.0494 7.95216 16.527C8.8425 17.1852 9.8659 17.6737 10.9746 17.9447C11.2804 15.9603 12.2726 14.2023 13.7011 12.9209C16.3037 13.264 18.3125 15.4912 18.3125 18.1875Z"
                    fill="white"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: "UI/UX & Branding",
        description:
            "We craft intuitive interfaces and cohesive visual identities that help your brand connect and stand out. From logos to product design — everything is built for clarity and impact.",
        icon: (
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0834 4.375C11.5578 4.375 11.9747 4.68948 12.105 5.14561L13.257 9.17771C13.7613 10.9426 15.1408 12.3221 16.9057 12.8264L20.9378 13.9784C21.3939 14.1087 21.7084 14.5256 21.7084 15C21.7084 15.4744 21.3939 15.8913 20.9378 16.0216L16.9057 17.1736C15.1408 17.6779 13.7613 19.0574 13.257 20.8223L12.105 24.8544C11.9747 25.3105 11.5578 25.625 11.0834 25.625C10.609 25.625 10.1921 25.3105 10.0618 24.8544L8.90973 20.8223C8.40548 19.0574 7.02594 17.6779 5.26108 17.1736L1.22898 16.0216C0.77285 15.8913 0.458374 15.4744 0.458374 15C0.458374 14.5256 0.77285 14.1087 1.22898 13.9784L5.26109 12.8264C7.02594 12.3221 8.40548 10.9426 8.90973 9.17771L10.0618 5.14561C10.1921 4.68948 10.609 4.375 11.0834 4.375Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8334 0.125C24.3209 0.125 24.7459 0.456816 24.8642 0.929806L25.2309 2.39671C25.564 3.72908 26.6043 4.7694 27.9367 5.1025L29.4036 5.46922C29.8766 5.58747 30.2084 6.01245 30.2084 6.5C30.2084 6.98755 29.8766 7.41253 29.4036 7.53078L27.9367 7.8975C26.6043 8.2306 25.564 9.27092 25.2309 10.6033L24.8642 12.0702C24.7459 12.5432 24.3209 12.875 23.8334 12.875C23.3458 12.875 22.9208 12.5432 22.8026 12.0702L22.4359 10.6033C22.1028 9.27092 21.0625 8.2306 19.7301 7.8975L18.2632 7.53078C17.7902 7.41253 17.4584 6.98755 17.4584 6.5C17.4584 6.01245 17.7902 5.58747 18.2632 5.46922L19.7301 5.1025C21.0625 4.7694 22.1028 3.72908 22.4359 2.39671L22.8026 0.929806C22.9208 0.456816 23.3458 0.125 23.8334 0.125Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.7084 19.25C22.1657 19.25 22.5717 19.5426 22.7163 19.9765L23.2749 21.652C23.4864 22.2866 23.9843 22.7845 24.6188 22.996L26.2944 23.5545C26.7282 23.6991 27.0209 24.1052 27.0209 24.5625C27.0209 25.0198 26.7282 25.4259 26.2944 25.5705L24.6188 26.129C23.9843 26.3405 23.4864 26.8384 23.2749 27.473L22.7163 29.1485C22.5717 29.5824 22.1657 29.875 21.7084 29.875C21.251 29.875 20.845 29.5824 20.7004 29.1485L20.1419 27.473C19.9304 26.8384 19.4325 26.3405 18.7979 26.129L17.1224 25.5705C16.6885 25.4259 16.3959 25.0198 16.3959 24.5625C16.3959 24.1052 16.6885 23.6991 17.1224 23.5545L18.7979 22.996C19.4325 22.7845 19.9304 22.2866 20.1419 21.652L20.7004 19.9765C20.845 19.5426 21.251 19.25 21.7084 19.25Z"
                    fill="white"
                />
            </svg>
        ),
    },
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const initialBg =
            getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#0F0F0F";
        const servicesBg = "#192023";

        const titleEl = el.querySelector(".title-main");
        const cardIcons = el.querySelectorAll(".icon");
        const cardTitles = el.querySelectorAll(".card-title");

        const addGradient = () => {
            if (titleEl) titleEl.classList.add("gradient-text");
            cardIcons.forEach((icon) => icon.classList.add("icon-gradient"));
            cardTitles.forEach((n) => n.classList.add("ternary-text"));
        };

        const removeGradient = () => {
            if (titleEl) titleEl.classList.remove("gradient-text");
            cardIcons.forEach((icon) => icon.classList.remove("icon-gradient"));
            cardTitles.forEach((n) => n.classList.remove("ternary-text"));
        };

        const setBg = (color) => {
            if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                document.documentElement.style.setProperty("--primary-color", color);
                if (color === servicesBg) addGradient();
                else removeGradient();
                return;
            }
            gsap.to(document.documentElement, {
                duration: 0.3,
                ease: "power2.in",
                "--primary-color": color,
                onComplete: () => {
                    if (color === servicesBg) addGradient();
                    else removeGradient();
                },
            });
        };

        gsap.set(titleRef.current, { opacity: 0, y: 80 });
        gsap.set(descriptionRef.current, { opacity: 0, y: 40 });
        gsap.set(cardsRef.current, { opacity: 0, y: 60 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
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
                cardsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                "-=0.3"
            );

        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 150px",
            end: "80% 100px",
            onEnter: () => setBg(servicesBg),
            onEnterBack: () => setBg(servicesBg),
            onLeave: () => setBg(servicesBg),
            onLeaveBack: () => setBg(initialBg),
            invalidateOnRefresh: true,
        });

        ScrollTrigger.refresh();
        const isInside = st && st.isActive;
        if (isInside) setBg(servicesBg);
        else setBg(initialBg);

        cardsRef.current.forEach((card, idx) => {
            if (!card) return;
            const overlay = card.querySelector(".card-overlay");
            if (!overlay) return;

            card.addEventListener("mouseenter", () => {
                gsap.fromTo(
                    overlay,
                    {
                        left: 0,
                        width: "0%",
                    },
                    {
                        width: "100%",
                        duration: 0.5,
                        ease: "power2.out",
                    }
                );
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(overlay, {
                    left: "100%",
                    width: "0%",
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.set(overlay, { left: 0 });
                    },
                });
            });
        });

        return () => {
            st.kill();
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="services w-full min-h-screen flex flex-col items-center justify-center"
        >
            <div className="service-container flex flex-col gap-20 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col md:gap-4 text-center">
                    <h2 ref={titleRef} className="title font-semibold">
                        <span className="title-main">Design. Develop.</span> <span className="title-accent">Deliver.</span>
                    </h2>
                    <p ref={descriptionRef} className="description">
                        From web platforms to mobile apps and brand experiences — we bring your ideas to life through
                        design, technology, and strategy.
                    </p>
                </div>
                <div className="card-section flex justify-center items-stretch gap-6 flex-wrap w-full">
                    <div className="card-wrapper w-full grid grid-cols-1 lg:grid-cols-3">
                        {servicesData.map((service, index) => (
                            <div
                                key={service.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="card flex justify-between min-h-[360px] lg:border-r border-[#72727256] last:border-r-0"
                            >
                                <div className="card-overlay"></div>
                                <div className="items-wrapper flex flex-col justify-center items-center gap-10 h-full">
                                    <div className="item-1 flex justify-center items-center gap-3">
                                        <img src="/images/services/card-layer.png" alt="card-layer" />
                                        <div className="icon">{service.icon}</div>
                                    </div>
                                    <div className="item-2 flex flex-col justify-start items-center text-center gap-4 min-h-[150px] md:min-h-[200px]">
                                        <h3 className="card-title font-semibold">{service.title}</h3>
                                        <p className="card-description">{service.description}</p>
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

export default Services;