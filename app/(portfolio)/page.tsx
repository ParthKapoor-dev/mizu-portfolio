"use client";
import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo";
import ScrollUp from "./components/Common/ScrollUp";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Cursor from "./components/ui/Cursor";
import { RefObject, useRef } from "react";

export default function Home() {

    const targetRefs: RefObject<HTMLDivElement>[] = [];
    return (
        <>
            <Cursor cursorClassName="dark:bg-orangeColor border-[0.5px] border-orangeColor " isHoveringClassName="dark:bg-orangeColor/20 " text="View Project" />
            <ScrollUp />
            <Hero />
            <Features targetRefs={targetRefs} />
            <Testimonials />
            <AboutSectionOne />
            <AboutSectionTwo />
            <Pricing />
            {/* <Contact /> */}
        </>
    );
}
