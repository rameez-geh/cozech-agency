"use client";
import React from "react";
import "./JumpStartCTA.scss";

const JumpStartCTA = () => {
    return (
        <section
            id="jump-start-cta"
            className="jump-start-cta w-full lg:min-h-screen flex flex-col items-center justify-center"
        >
            <div className="cta-container flex flex-col md:gap-6 justify-center items-center max-w-7xl w-full mx-auto">
                <img src="/images/CTA/svg/svgImage-1.svg" alt="Icon" className="left absolute top-0 left-0" />
                <img src="/images/CTA/svg/svgImage-2.svg" alt="Icon" className="right absolute top-0 right-0" />
                <div className="title-section w-full flex flex-col gap-8 md:gap-12 p-4">
                    <div className="text-section flex flex-col gap-2 md:gap-4 text-center ">
                        <h2 className="title font-semibold" data-text="Ready to Jumpstart Your Website?">
                            Ready to Jumpstart Your Website?
                        </h2>
                        <p className="description">Let’s create your online beginning.</p>
                    </div>
                    <div className="button-section flex flex-col items-center gap-4">
                        <div className="buttons flex gap-4">
                            <button type="button" className="btn1">
                                <span>Apply Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="image-section w-full">
                    <div className="cta-image-wrapper">
                        <img src="/images/CTA/cta-image-2.webp" alt="Decorative" className="cta-bottom-image" />
                    </div>
                    <div className="bars flex"></div>
                </div>
            </div>
        </section>
    );
};

export default JumpStartCTA;
