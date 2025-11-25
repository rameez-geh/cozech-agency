import React from "react";
import "./WhyFree.scss";

const WhyFree = () => {
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
    return (
        <section id="why-free" className="why-free w-full flex items-center justify-center">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-start justify-start lg:col-span-5">
                    <h2 data-text="Why Free?">
                        Why <span>Free?</span>
                    </h2>
                    <p className="description">We’re launching our studio and selecting 3 brands to:</p>
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
