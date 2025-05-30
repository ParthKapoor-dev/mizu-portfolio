import { Testimonial } from "@/app/(portfolio)/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-fit max-w-[40vw] max-md:max-w-[80vw]">
      <div className="rounded-2xl bg-white p-8 max-md:px-4 shadow-two duration-300 hover:shadow-one dark:bg-black/60 dark:shadow-three dark:hover:shadow-gray-dark ">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 max-md:mb-4 border-b border-body-color border-opacity-10 pb-8 max-md:pb-4 text-base max-md:text-sm leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] max-md:h-[30px] w-full max-w-[50px] max-md:max-w-[30px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg max-md:text-sm font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
