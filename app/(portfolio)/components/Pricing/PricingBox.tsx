
const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;


  return (
    <div className="w-full hover-glow duration-200 border-[10px] border-neutral-900">
      <div className="relative z-10 rounded-sm bg-white px-8  py-10 shadow-three hover:shadow-one dark:bg-neutral-900 dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-center">
          <h3 className="price mb-2 text-[48px] font-bold text-black dark:text-white">
            $<span className="amount">{price}</span>
            <span className="time text-xl font-medium text-body-color">
              /{duration}
            </span>
          </h3>
          {/* <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4> */}
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <div className="flex w-full items-center justify-center rounded-sm bg-orangeColor/80 p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
            {packageName}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
