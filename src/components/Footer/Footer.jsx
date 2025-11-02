import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
     <div className="fixed bottom-6 right-6 z-50">
        <Link to={'/wallet'}>   <button className="bg-black  text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
          Connect Wallet
        </button>
        </Link>
     
      </div>
    <footer className="bg-[#001F1F] text-white">
      <div className="max-w-full mx-auto px-6 md:px-8 xl:px-12 pt-12 pb-10">
        {/* Top Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between">
          {/* Logo */}
          <div className="mb-10 lg:mb-0 flex justify-center lg:block">
            <svg
              className="w-[150px] h-[60px]"
              viewBox="0 0 152 64"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M129.316 0L91.7186 37.5969C91.4705 37.845 91.1544 38.0139 90.8102 38.0823C90.4661 38.1507 90.1094 38.1154 89.7853 37.9809C89.4612 37.8465 89.1842 37.6189 88.9895 37.327C88.7948 37.0351 88.6911 36.692 88.6915 36.3411V19.0213H65.8795C65.4092 19.0213 64.9581 18.8345 64.6256 18.5019C64.293 18.1694 64.1062 17.7184 64.1062 17.2481V0.0271346H42.2593L0.953125 41.4399L22.6837 63.1783L59.9551 25.8973C60.2034 25.6495 60.5197 25.4808 60.8638 25.4126C61.208 25.3444 61.5647 25.3797 61.8888 25.5141C62.2129 25.6484 62.4899 25.8758 62.6849 26.1676C62.8798 26.4593 62.984 26.8022 62.9841 27.1531V44.7364H86.1198C86.5903 44.737 87.0413 44.9242 87.3738 45.2571C87.7063 45.5899 87.893 46.0412 87.893 46.5116V63.1357H109.74L151.046 21.7209L129.316 0Z" />
            </svg>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 w-full">
            {/* Getting Started */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Getting started</h3>
              {["Home", "Pricing", "How it works", "About us", "Blog"].map(
                (item, i) => (
                  <p key={i} className="mb-3 text-sm">
                    <Link to="/wallet" className="hover:underline">
                      {item}
                    </Link>
                  </p>
                )
              )}
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              {[
                "For individuals",
                "For families & groups",
                "For advisors",
              ].map((item, i) => (
                <p key={i} className="mb-3 text-sm">
                  <Link to="/wallet" className="hover:underline">
                    {item}
                  </Link>
                </p>
              ))}

              <h3 className="font-semibold mt-6 mb-4 text-lg">
                Bitcoin inheritance
              </h3>
              {["Inheritance planning", "Claiming inheritance"].map(
                (item, i) => (
                  <p key={i} className="mb-3 text-sm">
                    <Link to="/wallet" className="hover:underline">
                      {item}
                    </Link>
                  </p>
                )
              )}
            </div>

            {/* Connect with us */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Connect with us</h3>
              {["Twitter", "Slack", "Email"].map((item, i) => (
                <p key={i} className="mb-3 text-sm">
                  <Link to="/wallet" className="hover:underline">
                    {item}
                  </Link>
                </p>
              ))}
            </div>

            {/* Developer’s Corner */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Developer's corner</h3>
              <p className="mb-3 text-sm">
                <Link to="/wallet" className="hover:underline">
                  GitHub
                </Link>
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Join our newsletter</h3>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white text-gray-800 rounded-lg px-3 py-2 outline-none"
                />
                <button className="absolute right-2 text-gray-700 hover:text-purple-600">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-10 text-sm text-gray-400">
          <p className="mt-4 lg:mt-0">© 2025 Nunchuk Inc</p>
          <div className="flex gap-5">
            <Link to="/wallet" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/wallet" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer></>
  );
};

export default Footer;
