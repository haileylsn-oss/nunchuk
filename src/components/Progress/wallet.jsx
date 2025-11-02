import React from "react";
import { Link } from "react-router-dom";
import btc from "../../assets/btc.webp";


export default function WalletPage() {
  return (
    <div className="w-full">
      {/* ===== Section 1: Bitcoin Advisor ===== */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 text-[#00121c]">
            <h2 className="uppercase font-extrabold text-3xl lg:text-4xl">
              Are you a Bitcoin Advisor?
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Want to help your clients secure their bitcoins through
              collaborative custody? <br />
              We’ve got you covered.
            </p>
            <Link to={'/wallet'}>
              <button className="mt-8 font-semibold rounded-full h-12 px-8 text-center border-2 border-[#00121c] text-[#00121c] hover:border-[3px] hover:px-[30px] transition-all">
              Explore
            </button>
            </Link>
          
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={btc}
              alt="Bitcoin Advisor"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Section 2: Plan Your Legacy ===== */}
      <section className="bg-[#00121c] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="order-2 md:order-1 flex justify-center w-full md:w-1/2">
            <img
              src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/inheritance_mobile_4c38e7d79f.webp"
              alt="Plan Your Legacy"
              className="w-full max-w-md rounded-lg object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 w-full md:w-1/2 text-white">
            <h2 className="uppercase font-extrabold text-3xl lg:text-4xl">
              Plan your legacy
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Plan your inheritance in a non-custodial way and ensure that your
              bitcoins can be safely passed on to your loved ones. <br />
              Nunchuk inheritance plan can work independently or within your
              existing estate plan.
            </p>
            <div className="mt-8">
              <Link to="/wallet">
                <button className="font-semibold rounded-full h-12 px-8 text-center bg-yellow-400 text-teal-800 hover:bg-yellow-300 transition-all">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Worried About Backup ===== */}
      <section className="bg-[#000] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="order-2 md:order-1 flex justify-center w-full md:w-1/2">
            <img
              src="https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/backup_mobile_b666b29e63.webp"
              alt="Backup"
              className="w-full max-w-md rounded-lg object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2 w-full md:w-1/2 text-white">
            <h2 className="uppercase font-extrabold text-3xl lg:text-4xl">
              Worried about backup?
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              We've got you covered! The wallet configuration is securely backed
              up. With our assisted recovery feature, you can regain access to
              your wallet on a new device with a few simple steps.
            </p>
            <div className="mt-8">
              <Link to="/wallet">
                <button className="font-semibold rounded-full h-12 px-8 text-center bg-yellow-400 text-teal-800 hover:bg-yellow-300 transition-all">
                  View our plans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


