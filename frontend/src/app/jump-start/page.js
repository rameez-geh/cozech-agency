import React from "react";
import Hero from "@/components/JumpStart/Hero/Hero";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Description from "@/components/JumpStart/Description/Description";
import WhatYouGet from "@/components/JumpStart/WhatYouGet/WhatYouGet";
import WhyFree from "@/components/JumpStart/WhyFree/WhyFree";
import WhoCanApply from "@/components/JumpStart/WhoCanApply/WhoCanApply";
import HowProcessWork from "@/components/JumpStart/HowProcessWork/HowProcessWork";
import JumpStartCTA from "@/components/JumpStart/JumpStartCTA/JumpStartCTA";

export const metadata = {
    title: "Jump Start - COZECH",
    description: "Learn about COZECH's jump start program.",
};

const JumpStartPage = () => {
    return (
        <>
            <Navbar2 />
            <Hero />
            <Description />
            <WhatYouGet />
            <WhyFree />
            <WhoCanApply />
            <HowProcessWork />
            <JumpStartCTA />
        </>
    );
};

export default JumpStartPage;
