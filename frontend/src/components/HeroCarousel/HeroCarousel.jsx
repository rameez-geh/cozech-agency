"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import Hero from "@/components/Hero/Hero";
import JumpStartHero from "@/components/JumpStart/Hero/Hero";
import JumpstartModal from "@/components/JumpstartModal/JumpstartModal";
import "./HeroCarousel.scss";

const HeroCarousel = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const modalTimerRef = useRef(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        modalTimerRef.current = setTimeout(() => {
            setIsModalOpen(true);
        }, 4000);

        return () => {
            if (modalTimerRef.current) {
                clearTimeout(modalTimerRef.current);
            }
        };
    }, []);

    const handleCloseModal = () => {
        if (modalTimerRef.current) {
            clearTimeout(modalTimerRef.current);
            modalTimerRef.current = null;
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="hero-carousel-wrapper">
                <Swiper
                    modules={[Autoplay, Navigation, EffectCreative]}
                    effect="creative"
                    creativeEffect={{
                        prev: {
                            translate: ["-100%", 0, 0],
                            opacity: 0,
                        },
                        next: {
                            translate: ["100%", 0, 0],
                            opacity: 0,
                        },
                    }}
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1}
                    className="hero-slider"
                    allowTouchMove={true}
                    grabCursor={true}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;

                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    <SwiperSlide>
                        <Hero />
                    </SwiperSlide>

                    <SwiperSlide>
                        <JumpStartHero variant="carousel" />
                    </SwiperSlide>
                </Swiper>

                <div className="hero-nav-arrows">
                    <button ref={prevRef} className="hero-arrow hero-prev">
                        <ChevronLeft />
                    </button>
                    <button ref={nextRef} className="hero-arrow hero-next">
                        <ChevronRight />
                    </button>
                </div>
            </div>

            <JumpstartModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default HeroCarousel;
