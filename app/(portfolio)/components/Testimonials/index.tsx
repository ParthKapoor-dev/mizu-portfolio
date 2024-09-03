import { Testimonial } from "@/app/(portfolio)/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Marquee from "@/components/magicui/marquee";


const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },

];

const Testimonials = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="">
        <SectionTitle
          title="What Our Users Says"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="overflow-hidden relative ">
          <Marquee>
            <div className="flex gap-[1rem]">
              {testimonialData.map((testimonial) => (
                <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-white dark:from-darkColor"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-white dark:from-darkColor"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
