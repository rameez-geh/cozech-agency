import React from "react";
import "./WhoCanApply.scss";

const WhoCanApply = () => {
    const itemsImage = [
        {
            image: "/images/jump-to-start/WhoCanApply/item-2.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-3.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-4.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-5.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-6.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-7.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-8.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-9.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-10.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-11.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-12.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-13.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-14.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-15.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-1.svg",
        },
        {
            image: "/images/jump-to-start/WhoCanApply/item-16.svg",
        },
    ];
    return (
        <section id="who-can-apply" className="who-can-apply w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col items-center justify-center">
                    <h2 data-text="Who Can Apply?">
                        Who <span>Can Apply?</span>
                    </h2>
                    <p className="description">Smart solutions. Clear process. Lasting results.</p>
                </div>

                <div className="items-section">
                    <div className="items-wrapper grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                        {itemsImage.map((item, index) => (
                            <div key={index} className="item flex items-center justify-center">
                                <div className="icon-item">
                                    <img className="icon-image" src={item.image} alt="Icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="paragraph-section">
                    <p>
                        These are examples. We work with all kinds of businesses. <span>Join the waitlist.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhoCanApply;
