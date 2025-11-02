import { Link } from "react-router-dom";

export default function Eco() {
  const features = [
    {
      title: "World-Class Security",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/home_overview_icon_1_8cfa3fc977.svg",
      description:
        "Eliminate single points of failure with our state-of-the-art multisig and group wallets. Benefit from robust hardware support, advanced coin control, and much more.",
    },
    {
      title: "Inheritance Planning",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Inheritance_Planning_e3b0bbe98c.svg",
      description:
        "Gain peace of mind with a time-locked Bitcoin inheritance plan. Ensure that your family has a secure and straightforward way to access your bitcoin in the event of your passing.",
    },
    {
      title: "Privacy",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/home_privacy_4898c9caad.svg",
      description:
        "Security doesn't have to come at the cost of privacy. Our solutions are designed to minimize data collection and maximize your and your family's privacy at every step of the way.",
    },
  ];

  return (
    <section className="pt-[70px] pb-[90px] lg:pt-[190px] bg-white">
      <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] w-[1920px] lg:px-12 xl:px-24 2xl:px-[174px]">
        <div className="flex flex-col lg:flex-row justify-center space-y-[50px] lg:space-y-0 lg:space-x-20 2xl:space-x-[90px] w-full max-w-full mx-auto">
          {features.map((item, index) => (
            <div key={index} className="text-teal-900 lg:w-1/3 text-center lg:text-left">
              <div className="w-[70px] h-[70px] lg:w-20 lg:h-20 mx-auto lg:mx-0 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold mt-[25px] lg:mt-[30px] mb-3 lg:mb-3.5 text-[20px] lg:text-[22px]">
                {item.title}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-[50px] lg:mt-[100px]">
          <Link to="/wallet">
            <button
              className="font-semibold rounded-[44px] box-border h-12 px-[30px] text-center bg-yellow-400 text-teal-900 hover:bg-yellow-500 transition-colors"
              aria-label="View our plans"
            >
              View our plans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
