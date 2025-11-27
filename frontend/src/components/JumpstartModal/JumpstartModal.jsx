"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ClipboardCheck, X } from "lucide-react";
import "./JumpstartModal.scss";

const JumpstartModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const freeTextRef = useRef(null);
    const hasAnimated = useRef(false);

    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScrApDpKPJs6fVZuL4KZ2EZsYtEfPkoAq22UmsjnqNJe1PfWw/viewform?usp=sharing&ouid=114158827343874682983";

    const handleApplyClick = () => {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    };

    const handleLearnMoreClick = () => {
        window.location.href = "/jump-start";
    };

    useEffect(() => {
        if (isOpen) {
            gsap.registerPlugin(SplitText);

            document.body.style.overflow = "hidden";

            const ctx = gsap.context(() => {
                gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });

                gsap.fromTo(
                    contentRef.current,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
                );

                const split = new SplitText(".modal-main-title", {
                    type: "chars",
                    charsClass: "char",
                });

                const tl = gsap.timeline({
                    defaults: { ease: "power3.out" },
                    delay: 0.2,
                });

                tl.from(".modal-logo", {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.6,
                })
                    .from(".modal-main-title-wrapper h3", { y: 30, opacity: 0, duration: 0.5 }, "-=0.4")
                    .from(split.chars, { y: 50, opacity: 0, stagger: 0.03, duration: 0.5 }, "-=0.3")
                    .from(".modal-subtitle", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
                    .from(".modal-subtitle + p", { y: 20, opacity: 0, duration: 0.5 }, "-=0.4")
                    .from(".modal-apply-btn", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
                    .from(".modal-cta-section p", { opacity: 0, duration: 0.4 }, "-=0.2");

                if (freeTextRef.current) {
                    gsap.to(freeTextRef.current, {
                        rotation: 15,
                        transformOrigin: "bottom center",
                        duration: 0.3,
                        ease: "power1.inOut",
                        yoyo: true,
                        repeat: -1,
                        repeatDelay: 0.1,
                    });
                }
            }, contentRef);

            return () => {
                ctx.revert();
                document.body.style.overflow = "auto";
            };
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const handleClose = () => {
        gsap.to(contentRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "back.in(1.7)",
        });
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: onClose,
        });
    };

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div ref={modalRef} className="jumpstart-modal-overlay" onClick={handleBackdropClick}>
            <div ref={contentRef} className="jumpstart-modal-content">
                <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-bg-image">
                    <img src="/images/jump-to-start/Hero/hero-bg.svg" alt="Hero Background" />
                </div>

                <div className="modal-gradient-overlay" />

                <div className="modal-section-wrapper">
                    <div className="modal-title-section">
                        <div className="modal-main-title-section">
                            <div className="modal-logo">
                                <img src="/images/jump-to-start/Hero/hero-logo.svg" alt="Hero Logo" />
                            </div>
                            <div className="modal-main-title-wrapper">
                                <h3>COZECH</h3>
                                <h1 className="modal-main-title">JUMPSTART</h1>
                            </div>
                        </div>
                        <div className="modal-sub-title-section">
                            <div className="modal-subtitle">
                                <h4>
                                    Build a Premium Website -{" "}
                                    <span ref={freeTextRef} className="highlight-free" style={{ display: "inline-block" }}>
                                        Free
                                    </span>
                                </h4>
                            </div>
                            <p>Selected for 3 growing businesses. Fast, modern, and fully supported</p>
                        </div>
                    </div>

                    <div className="modal-cta-section">
                        <div className="modal-buttons-row">
                            <button onClick={handleApplyClick} className="modal-primary-btn">
                                <span>Apply Now</span>
                                <ClipboardCheck size={16} stroke="#f3f3f3" />
                            </button>
                            <button onClick={handleLearnMoreClick} className="modal-secondary-btn">
                                <span>Learn More</span>
                            </button>
                        </div>
                        <p>3 spots only</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JumpstartModal;
