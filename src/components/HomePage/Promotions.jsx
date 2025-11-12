import promotionBg from "../../assets/people bg.png";
import people from "../../assets/live_img.png";
import { FaPlay } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Promotions = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-10 sm:py-14 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(${promotionBg})` }}
    >
      <div className="w-full max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6 md:px-10">
        {/* ===== Left Content ===== */}
        <div
          data-aos="zoom-in-up"
          className="max-w-xl text-center md:text-left"
        >
          {/* Label */}
          <div className="flex justify-center md:justify-start gap-3 items-center mb-3 sm:mb-4">
            <div className="border-b-[3px] w-8 sm:w-10 border-[#F0E500]"></div>
            <p className="text-[10px] sm:text-xs md:text-sm text-[#1e1b29] font-semibold tracking-wider uppercase">
              Smartphone Deals
            </p>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e1b29] leading-snug sm:leading-tight mb-3 sm:mb-4">
            Discover The Latest Phones <br className="hidden sm:block" /> For
            Work & Play
          </h2>

          {/* Description */}
          <p className="text-[#6a6a6a] text-sm sm:text-base md:text-[15px] font-medium mb-5 sm:mb-6 leading-relaxed">
            Upgrade your mobile experience with the newest iPhone, Android, and
            Pixel devices. <br className="hidden md:block" />
            From blazing-fast performance to stunning cameras — find the perfect
            phone that fits your lifestyle and budget.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 sm:gap-8 mb-8">
            <div
              style={{
                color: "transparent",
                WebkitTextStroke: "1px red",
                textStroke: "1px red",
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase"
            >
              5G
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-[38px] text-[#1e1b29] font-bold leading-tight">
                5K+
              </p>
              <p className="text-[#1e1b29] font-semibold text-sm sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            className="flex items-center justify-center gap-2 bg-[#e4d804] border border-[#e4d804] rounded-full 
            font-bold text-[#1e1b29] text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-8 
            hover:bg-white transition duration-300 ease-in-out mx-auto md:mx-0"
          >
            <FaPlay className="text-xs sm:text-sm" />
            SHOP NOW
          </button>
        </div>

        {/* ===== Right Image ===== */}
        <div
          data-aos="zoom-in-down"
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-cover rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            src="https://i.pinimg.com/1200x/1c/9f/0a/1c9f0abc7722631214b31d807351b2bb.jpg"
            alt="People using smartphones"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotions;
