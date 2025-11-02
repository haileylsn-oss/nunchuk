import React from "react";

export default function Blog() {
  return (
    <section className="bg-[#00121c] pt-[72px] pb-[90px] lg:pb-[178px] lg:pt-[150px]">
      <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] w-full lg:w-[1920px]">
        <h1 className="text-3xl lg:text-[80px] lg:leading-[80px] font-extrabold uppercase text-white text-center lg:w-[879px] mx-auto mb-20 lg:mb-[37px]">
          The easiest way to secure and access your bitcoin
        </h1>

        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-[30px]">
          {/* Video Section */}
          <div className="w-full lg:col-start-1 lg:col-end-9">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source
                  src="https://static-assets.nunchuk.io/assets_v1/9_11.mp4#t=0.001"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:col-start-9 lg:col-end-13 flex flex-col justify-center text-white">
            <div className="xl:w-[400px] 2xl:w-[477px]">
              <h2 className="text-2xl lg:text-4xl font-extrabold uppercase">
                Access your funds with simple taps
              </h2>
              <p className="mt-3.5 lg:mt-[18px] text-base lg:text-lg">
                Enjoy the world's first NFC-capable Bitcoin cold storage. Set up
                your wallet and sign transactions with simple taps on your
                phone. No wires required.
              </p>

              <div className="w-[155px] h-[34px] lg:w-[180px] lg:h-[40px] relative mt-5 lg:mt-8">
                <img
                  alt="Powered by"
                  src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/home_badge_159b92c84f.png"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
