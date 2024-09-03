import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { BackgroundGradient } from "@/components/aceternity/GlowCard";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text } : { text : string}) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      {/* <div className="w-full flex items-center justify-center text-5xl font-bold mb-20">
        <p className="dark:text-orangeColor/80">
          Quality Assurance
        </p>
      </div> */}


      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 flex mx-[15vw] max-md:mx-[4vw] justify-between mt-20 max-md:flex-col">
        <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
            title={data.title}
            paragraph={data.para}
            mb="44px"
          />

          <div
            className="mb-12 max-w-[570px] lg:mb-0"
            data-wow-delay=".15s"
          >
            <div className="mx-[-12px] flex ">
              <div className="w-full px-3 lg:w-full xl:w-1/2 max-md:flex flex-col items-center">
                <List text="1" />
                <List text="2" />
                <List text="3" />
              </div>

              <div className="w-full px-3 lg:w-full xl:w-1/2">
                <List text="4" />
                <List text="5" />
                <List text="6" />
              </div>
            </div>
          </div>
        </div>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 max-md:p-8 sm:p-10 bg-white dark:bg-zinc-900 h-full">
          <Image
            src={`/images/skate1.jpg`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-lg"
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

      </div>
    </>

  );
};

const data = {
  title: "Get the best Quality products at your home instantly",

  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque consequat magna.Proin at purus vehicula, dignissim metus et, mollis justo. Phasellus sed velit nunc.",
}

export default AboutSectionOne;
