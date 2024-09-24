"use client";
import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo";
import ScrollUp from "./components/Common/ScrollUp";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Cursor from "./components/ui/Cursor";

export default function Home() {

    return (
        <>
            <Cursor cursorClassName="dark:bg-orangeColor border-[0.5px] border-orangeColor max-md:hidden" isHoveringClassName="dark:bg-orangeColor/20 " text="View Project" />
            <ScrollUp />
            <Hero />
            <Features/>
            <Testimonials />
            <AboutSectionOne />
            <AboutSectionTwo />
            <Pricing />
        </>
    );
}
