import React from "react";
import { Link } from "react-router-dom";

 const hardwareList = [
    {
      name: "TAPSIGNER",
      link: "https://tapsigner.com/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Tapsigner_4ed0e3c581.svg",
    },
    {
      name: "COLDCARD",
      link: "https://coldcard.com/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Cold_Card_541d8afa39.png",
    },
    {
      name: "BlockStream Jade",
      link: "https://blockstream.com/jade/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Jade_logo_3aae61904b_6e246d4892_96f2f791f0.svg",
    },
    {
      name: "TwentyTwo",
      link: "https://twenty-two.xyz",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Frame_10710_1ab82dbe77.png",
    },
    {
      name: "SeedSigner",
      link: "https://seedsigner.com/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Seedsigner_b642191025.png",
    },
    {
      name: "Trezor",
      link: "https://trezor.io/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Trezor_5a402f1621.png",
    },
    {
      name: "Ledger",
      link: "https://www.ledger.com/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Ledger_3dbdbe51bd.png",
    },
    {
      name: "BitBox",
      link: "https://bitbox.swiss/bitbox02/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Bitbox_1_5e5ad7dafb.png",
    },
    {
      name: "Foundation Passport",
      link: "https://foundationdevices.com/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/fndn_logo_1_b2511419cf.png",
    },
    {
      name: "Keystone",
      link: "https://keyst.one/",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/keystone_logo_2024.png",
    },
  ];


const WalletSections = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-teal-0">
        <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] w-[1920px]">
          <div className="pt-10 pb-[90px] md:py-14 lg:py-20 xl:py-28 flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-20">
            
            {/* Text */}
            <div className="order-2 md:order-1">
              <div className="w-full md:w-[350px] lg:w-[473px] lg:ml-4 xl:ml-12 pr-0 lg:pr-10">
                <h2 className="uppercase text-mobile-heading-3 lg:text-heading-4 text-white font-extrabold pt-[50px] md:pt-0">
                  Different wallets for different needs
                </h2>
                <p className="text-mobile-body lg:text-body mt-[18px] text-white">
                  Nunchuk was designed for a diverse range of custody use cases.
                  Whether you want to manage bitcoins yourself or collaboratively
                  with others, you'll find a wallet that meets your need.
                </p>
                <div className="text-center lg:text-left">
                  <Link to="/wallet">
                    <button
                      className="font-semibold rounded-[44px] h-12 px-[30px] mt-10 bg-yellow-0 text-white border-2 border-white  hover:bg-yellow-1"
                      type="button"
                    >
                      View our plans
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 w-full md:w-auto flex items-center justify-center">
              <img
                src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/wallets_mobile_1ec3ad1d52.webp"
                alt="Highlight"
                className="rounded-lg max-w-[500px] w-full block lg:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-silver-1 pt-[60px] pb-[90px] lg:py-[156px] text-teal-0">
        <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] w-[1920px] lg:px-12 xl:px-24">
          <div className="grid gap-[90px] lg:grid-cols-2 lg:gap-20 xl:gap-30">
            
            {/* Card 1 */}
            <div>
              <div className="flex justify-center">
                <img
                  src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/airgapped_2x_6e7c062594.png"
                  alt="Air-gapped signing"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-20">
                <h3 className="uppercase text-mobile-heading-3 lg:text-heading-4 font-extrabold mt-[50px] text-white ">
                  Air-gapped signing support
                </h3>
                <p className="text-mobile-body lg:text-body mt-3.5 text-white">
                  Looking for an air-gapped setup? With the right hardware,
                  enjoy signing your transactions either with QR codes or over SD
                  cards.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="flex justify-center">
                <img
                  src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/multi_user_2x_c74766d33c.png"
                  alt="Multi-user multisig"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-20">
                <h3 className="uppercase text-mobile-heading-3 lg:text-heading-4 font-extrabold mt-[50px] mb-[14px] text-white">
                  The world's first multi-user multisig
                </h3>
                <p className="text-mobile-body lg:text-body text-white">
                  Co-manage bitcoins with your family or business partners.
                  Communicate and transact securely and privately, all in one
                  place.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-[50px] lg:mt-[90px]">
            <Link to="/wallet">
              <button
                className="font-semibold rounded-[44px] h-12 px-[30px] border-2 border-white bg-yellow-0 text-white hover:bg-yellow-1"
                type="button"
              >
                View our plans
              </button>
            </Link>
          </div>
        </div>
      </section>
 <section className="bg-white py-20 lg:py-[180px]">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 xl:px-[50px] lg:px-12 xl:px-24 2xl:px-[174px]">
        <h1 className="text-mobile-heading-3 w-full lg:text-heading-4 font-extrabold uppercase text-teal-600 text-center lg:w-[477px] mx-auto mb-10 lg:mb-[75px]">
          Most Major Hardware Supported
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-y-16 xl:gap-x-12">
          {hardwareList.map((item, index) => (
            <a
              key={index}
              href={'/wallet'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 relative hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="object-contain w-full h-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
      
    </>
  );
};

export default WalletSections;
