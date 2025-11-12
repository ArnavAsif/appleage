import { useState, useEffect } from "react";
import reactBg from "../../assets/hero.jpg";
import reactBgMobile from "../../assets/hero3.jpg";
import { Fade } from "react-awesome-reveal";
import { FaPlay } from "react-icons/fa";

const Headers = () => {
  const [bgImage, setBgImage] = useState(reactBg);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 768) {
        setBgImage(reactBgMobile);
      } else {
        setBgImage(reactBg);
      }
    };

    updateBg(); // set on mount
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(28,27,31,0.7)), url(${bgImage})`,
      }}
    >
      <div className="w-10/12 mx-auto pb-5">
        <div className="p-4 flex justify-start items-center min-h-[70vh] md:min-h-[90vh]">
          <div className="max-w-2xl">
            <Fade direction="down" triggerOnce>
              <p className="text-xl md:text-2xl text-[#e4d804] font-bold tracking-wide">
                Apple Age
              </p>
            </Fade>

            <Fade direction="up" triggerOnce>
              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] text-white font-bold mt-3 mb-7 leading-tight">
                Unlimited <span className="text-[#e4d804]">Mobile</span>
                <br className="hidden md:block" />
                Zone
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="font-bold bg-white text-black text-xs px-3 py-1 rounded">
                  Iphone
                </span>
                <span className="font-bold bg-black text-white border border-white text-xs px-3 py-1 rounded">
                  Android
                </span>
                <a
                  href="#"
                  className="text-sm text-white font-bold hover:text-[#e4d804] backdrop-blur-md px-2 py-1 rounded transition "
                >
                  & Other Accessories
                </a>
              </div>

              {/* Watch Button */}
              <button className="flex items-center gap-2 bg-[#12151e]/90 border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs sm:text-sm py-3 px-6 hover:bg-[#e4d804] hover:text-black transition-all duration-300 ease-in-out">
                <FaPlay className="text-sm" />
                WATCH NOW
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
