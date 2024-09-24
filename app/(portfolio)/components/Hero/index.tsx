import Link from "next/link";
import { PortfolioButton } from "@/components/ui/button"
import Brands from "../Brands";
import { useRouter } from "next/navigation";

const Hero = () => {

  const router = useRouter();

  function handleBuildPage(){
    router.push("/build");
  }

  return (
    <>
      <section
        id="home"
        className="relative px-[15vw] max-md:px-[2vw] z-10 overflow-hidden  pb-16 flex h-screen flex-col justify-center gap-8 pt-[12vh] background-half-shade "
      >

        <div className="w-full flex items-center justify-center flex-col gap-6">

          <video loop autoPlay className="!rounded-[16px] overflow-hidden h-[60vh] max-md:h-[20vh] max-md:px-[4vw] max-md:hidden">
            <source src="/videos/sample_monk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video loop autoPlay muted className="!rounded-[16px] overflow-hidden h-[60vh] hidden max-md:block">
            <source src="/videos/sample_monk_mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="flex items-center gap-6">

            <PortfolioButton variant="filled" containerStyles="" onClick={handleBuildPage} >
              Let's Build
            </PortfolioButton>
            <PortfolioButton containerStyles="">
              Learn More
            </PortfolioButton>
          </div>

        </div>

        <Brands />

      </section>
    </>
  );
};

export default Hero;


// CONTAINER

// <div className="container py-16 z-0 rounded-lg ">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 max-md:px-2">
//               <div className="mx-auto max-w-[800px] text-center flex flex-col gap-6">

//                 <div className="w-full flex items-center justify-center">
//                   <video loop autoPlay className="!rounded-[16px] overflow-hidden ">
//                     <source src="/videos/sample_monk.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>


//                 {/* <h1 className="mb-5 text-5xl max-md:text-3xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">
//                   Elevate your brand with a timeless minimal logo.
//                 </h1>
//                 <p className="mb-12 text-xl max-md:text-base !leading-relaxed text-body-color dark:text-body-color-dark ">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                 </p> */}
//                 <div className="flex items-center justify-center gap-8 max-md:flex-col max-md:gap-4">
//                   <PortfolioButton variant="filled" containerStyles="max-md:w-full" >
//                     Let's Build
//                   </PortfolioButton>
//                   <PortfolioButton containerStyles="max-md:w-full">
//                     Learn More
//                   </PortfolioButton>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>