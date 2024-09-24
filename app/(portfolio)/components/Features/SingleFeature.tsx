"use client";
import { Feature } from "../../types/feature";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import icons from "@/utils/icons";
import Image from "next/image";


interface SingleFeatureProps {
  feature: Feature,
  idx: number,
  className?: string
}

const SingleFeature = ({ feature, idx, className }: SingleFeatureProps) => {

  const { icon, title, paragraph } = feature;


  return (

    <Dialog>
      <DialogTrigger className={cn("w-full target-refs dark:bg-black/30 p-6 rounded-2xl glow-card border-[0.5px] border-black/30 duration-150 hover:scale-[105%]", className)}>

        <div className="wow fadeInUp" data-wow-delay=".15s">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-orangeColor bg-opacity-10 text-orangeColor">
            {icon}
          </div>
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-left">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-left">
            {paragraph}
          </p>
        </div>

      </DialogTrigger>
      <DialogContent>

        <DialogHeader>
          <DialogTitle>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div>

          <p>
            {paragraph}
          </p>

          <div className="flex gap-2 flex-wrap">
            {icons.map(item => (
              <Image src={item} alt="icon" height={80} className=" rounded-full" />
            ))}
          </div>

        </div>

        <div></div>
      </DialogContent>
    </Dialog>


  );
};

export default SingleFeature;
