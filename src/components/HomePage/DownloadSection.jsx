import { FiDownload } from "react-icons/fi";
import { BsShopWindow } from "react-icons/bs";
import { LiaStaylinked } from "react-icons/lia";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DownloadSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#1C1B1F] px-4 sm:px-6 md:px-10 py-12 md:py-16 lg:py-20">
      <div
        data-aos="zoom-in"
        className="flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-14 w-full max-w-screen-xl px-4 sm:px-6 md:px-10 mx-auto items-center"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-5">
            <div className="w-full sm:w-3/4">
              <img
                src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/447603621_122104214180348760_3207661978139343413_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE6D3dqrOfjbV95RCBd5YmlSw_udM8N_6BLD-50zw3_oEhLZ8Qw8RpPBL52lbsER4WnCuvxoNY__8G0jkdFsG64&_nc_ohc=SpGZMAvmLv8Q7kNvwEB2CEs&_nc_oc=AdkjO4giYUIWP-NnFoFBXK4ZVaqaMJb4ofilTCE-dMoI2vFvgvZQqV3wHOijDR_scD4&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=c5SZq_12ZIiVQidYMlK0ZA&oh=00_AfiWctmYyEA99TlcCTm9zWJ23Hdf0UJzMg6CCRR9d41TbA&oe=691A4BB8"
                alt="Download"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div>
            <div className="flex gap-3 items-center mb-2">
              <div className="border-b-[3px] w-10 border-[#F0E500]"></div>
              <p className="text-[#e4e2e2] text-xs sm:text-sm">
                Our Mobile Services
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight">
              Get Your Favorite Phones <br /> Anytime, Anywhere.
            </h2>
            <p className="text-[#bcbcbc] text-sm sm:text-base mt-3 mb-6 leading-relaxed">
              Discover the latest smartphones from Apple, Samsung, Google, and
              more — all in one place. Order online, get quick delivery, and
              explore exclusive offers. Whether you're upgrading, buying used,
              or comparing models, our platform makes it effortless.
            </p>
          </div>

          {/* Service 1 */}
          <div className="flex py-6 gap-5 sm:gap-8 items-center">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-dashed border-[#F0E500]">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                <BsShopWindow className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            <div>
              <p className="text-base sm:text-lg text-white font-bold mb-2">
                Shop with Confidence.
              </p>
              <p className="text-[#bcbcbc] text-sm sm:text-base leading-snug">
                Explore verified listings, compare prices, and read reviews
                before purchasing your next smartphone or accessory.
              </p>
            </div>
          </div>

          <hr className="border-dotted border-white opacity-40" />

          {/* Service 2 */}
          <div className="flex pt-6 gap-5 sm:gap-8 items-center">
            <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full border border-dashed border-[#F0E500]">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full hover:bg-[#F0E500] transition duration-300 ease-in-out cursor-pointer">
                <LiaStaylinked className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            <div>
              <p className="text-base sm:text-lg text-white font-bold mb-2">
                Stay Connected.
              </p>
              <p className="text-[#bcbcbc] text-sm sm:text-base leading-snug">
                Find the perfect device to match your lifestyle — for work,
                gaming, photography, or everyday use. We’ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
