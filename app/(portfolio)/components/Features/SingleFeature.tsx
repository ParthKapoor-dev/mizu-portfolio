"use client";
import { Feature } from "../../types/feature";
import { cn } from "@/lib/utils";
import { RefObject, useEffect, useRef } from "react";

const SingleFeature = ({ feature, targetRefs, idx }: { feature: Feature, targetRefs: RefObject<HTMLDivElement>[], idx: number }) => {

  const { icon, title, paragraph } = feature;
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    targetRefs.splice(idx, 1, currentRef)
  }, [currentRef])

  return (
    <div className={cn("w-full target-refs dark:bg-black/30 p-6 rounded-2xl glow-card")} ref={currentRef}>
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-orangeColor bg-opacity-10 text-orangeColor">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
