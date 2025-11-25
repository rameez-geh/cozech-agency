import React from "react";
import "./HowProcessWork.scss";
const HowProcessWork = () => {
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
    return (
        <section id="how-process-work" className="how-process-work w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 lg:gap-16 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-center justify-center">
                    <h2 data-text="How Process Work?">
                        How <span>Process Work?</span>
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>

                <div className="process-items-section w-full">
                    <div className="items-wrapper grid grid-cols-3 lg:grid-cols-5 gap-4">
                        {processItems.map((item, index) => (
                            <div key={index} className="item flex flex-col items-center justify-center gap-4">
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
