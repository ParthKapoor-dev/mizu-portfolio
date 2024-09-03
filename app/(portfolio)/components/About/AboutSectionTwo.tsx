import Image from "next/image";
import { BackgroundGradient } from "@/components/aceternity/GlowCard";

const AboutSectionTwo = () => {
  return (
    <div className=" px-[15vw] max-md:px-[4vw] flex max-md:flex-col max-md:gap-20 justify-between py-[15vh] h-full">

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 max-md:p-8 sm:p-10 bg-white dark:bg-zinc-900 h-full">
        <Image
          src={`/images/shoes1.jpg`}
          alt="jordans"
          height="400"
          width="400"
          className=" object-cover h-52 object-center rounded-lg "
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </BackgroundGradient>


      <div className="w-full px-4 lg:w-1/2">
        <div className="max-w-[470px] max-md:text-center">
          <div className="mb-9 ">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-">
              Lorem ipsum
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mb-9">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Lorem ipsum
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt.
            </p>
          </div>
          <div className="mb-1">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Lorem ipsum
            </h3>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
              consectetur adipiscing elit setim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
