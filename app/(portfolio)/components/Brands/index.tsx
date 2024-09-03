
import { Brand } from "../../types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Marquee from "@/components/magicui/marquee";

const Brands = () => {
  return (
    <section className="overflow-hidden relative">
      <Marquee className="">
        {brandsData.map((brand) => (
          <SingleBrand key={brand.id} brand={brand} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-darkColor"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-darkColor"></div>

    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight || ""} alt={name} width={200} height={200} className="hidden dark:block" />
        <Image src={image} alt={name} width={200} height={200} className="block dark:hidden" />
      </a>
    </div>
  );
};