import Link from "next/link";
import { LogoEffect } from "./LogoEffect";
import { PortfolioButton } from "@/components/ui/button"
import Brands from "../Brands";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative px-[15vw] max-md:px-[2vw] z-10 overflow-hidden  pb-16 h-screen flex flex-col justify-center gap-16 pt-[12vh] background-half-shade "
      >

        <div className="container py-16 z-0 rounded-lg ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 max-md:px-2">
              <div className="mx-auto max-w-[800px] text-center ">
                <h1 className="mb-5 text-5xl max-md:text-2xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">
                  Elevate your brand with a timeless minimal logo.
                </h1>
                <p className="mb-12 text-xl max-md:text-base !leading-relaxed text-body-color dark:text-body-color-dark ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <PortfolioButton variant="filled" >
                    Hello World
                  </PortfolioButton>
                  <PortfolioButton>
                    Learn More
                  </PortfolioButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Brands />
      </section>
    </>
  );
};

export default Hero;
