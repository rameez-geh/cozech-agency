"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Hero from "@/components/Hero/Hero";
import JumpStartHero from "@/components/JumpStart/Hero/Hero";
import JumpstartModal from "@/components/JumpstartModal/JumpstartModal";

const HeroCarousel = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        const modalTimer = setTimeout(() => {
            setIsModalOpen(true);
        }, 4000);

        return () => clearTimeout(modalTimer);
    }, []);

    return (
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                slidesPerView={1}
                className="hero-slider"
                allowTouchMove={true}
                grabCursor={true}
            >
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                <SwiperSlide>
                    <JumpStartHero />
                </SwiperSlide>
            </Swiper>

            <JumpstartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default HeroCarousel;
