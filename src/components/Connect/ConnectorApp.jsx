import { Link } from "react-router-dom";
import desktopBanner from "../../assets/1.webp";
import mobileBanner from "../../assets/ww.jpg";
import appStore from "../../assets/play.png";
import playStore from "../../assets/app.png";

export default function ConnectorApp() {
  return (
    <section className="bg-[#eaeaea] -mt-10 lg:-mt-[72px]">
      <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] !px-0 w-[1920px]">
        <div className="flex flex-col lg:flex-row">
          {/* Left text section */}
          <div className="w-full lg:w-[42%] flex flex-col justify-end text-teal-0 order-2 lg:order-1 pt-[25px] px-4 pb-9 lg:pb-[60px] lg:px-8 xl:pl-[50px]">
            <h1 className="uppercase text-[28px] lg:text-5xl 2xl:text-6xl font-extrabold max-w-full w-[350px] lg:w-[500px] 2xl:w-[600px] whitespace-pre-line">
              Secure <br /> Your Bitcoin <br /> for Generations
            </h1>

            <h2 className="mt-2.5 text-gray-700 text-base lg:text-lg">
              A privacy-first, trust-minimized Bitcoin inheritance solution. Your keys, your coins, your legacy. No KYC.
            </h2>

            <div className="mt-[26px] flex items-center">
              <Link to="/wallet" className="mr-3">
                <img
                  src={appStore}
                  alt="App Store Download"
                  className="w-[143px] h-[48px] object-contain"
                />
              </Link>
              <Link to="/wallet">
                <img
                  src={playStore}
                  alt="Play Store Download"
                  className="w-[143px] h-[48px] object-contain"
                />
              </Link>
            </div>

            <div className="text-silver-4 text-base mt-2">
              *{" "}
              <Link to="/wallet" className="text-teal-500 hover:underline">
                Desktop app
              </Link>{" "}
              and{" "}
              <Link to="/wallet" className="text-teal-500 hover:underline">
                Android APKs
              </Link>
            </div>
          </div>

          {/* Right image (desktop) */}
          <div className="hidden md:block relative w-full lg:w-[58%] h-[100vh] lg:max-h-[1020px] order-1 lg:order-2 bg-silver-1">
            <img
              src={desktopBanner}
              alt="Secure Your Bitcoin for Generations"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Mobile image */}
          <div className="block md:hidden relative w-full h-[528px] order-1">
            <img
              src={mobileBanner}
              alt="Secure Your Bitcoin for Generations"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
