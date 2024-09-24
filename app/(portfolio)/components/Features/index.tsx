import { RefObject } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {

  const displayFeatures = featuresData.slice(0, 2);

  return (
    <>
      <section id="features" className="py-16 px-[15vw] max-md:px-[2vw] md:py-20 lg:py-28  ">
        <div className="container max-md:px-6">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-2 ">
            {displayFeatures.map((feature, index) => (
              <SingleFeature key={feature.id} idx={index} feature={feature} />
            ))}
          </div>

          <div className="mt-4 mx-[22.5%] max-md:mx-0">
            <SingleFeature feature={featuresData[2]} idx={2} className=" min-h-[30vh]" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Features;
