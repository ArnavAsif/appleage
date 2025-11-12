import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import blackBg from "../../assets/theme bg.png";
import { Link } from "react-router";

const AllMobiles = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const phones = [
    {
      name: "iPhone",
      image:
        "https://e0.pxfuel.com/wallpapers/204/514/desktop-wallpaper-logo-iphone-original-apple-logo.jpg",
      path: "iphones",
    },
    {
      name: "Android",
      image:
        "https://www.freevector.com/uploads/vector/preview/9702/FreeVector-Android-Logo.jpg",
      path: "android",
    },
    {
      name: "Google Pixel",
      image:
        "https://static0.xdaimages.com/wordpress/wp-content/uploads/2020/05/google-pixel-logo.jpg?q=50&fit=crop&w=1200&h=675&dpr=1.5",
      path: "pixel",
    },
    {
      name: "Others",
      image:
        "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/302276461_483268740464568_8233736533896161684_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1OnL9LFwjcakKzyh564HNfcfRx0bmjsR9x9HHRuaOxOV3ZYeOvqzKR7kGxyVu9F_DyDFZYcXPbcJ73vJ-hGsK&_nc_ohc=KTKGpOsPeTQQ7kNvwFWccnI&_nc_oc=AdnSAgb5eX0-QwCs3ZJznvGwRC5PoXalS6QDzJRchylM_p-oecDLMePc2mbrwV0tJjI&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=r1uQSOUB_t58aAifzyTjJA&oh=00_AfjDc8DIhvQUJkfaFW0rCn6N105WDN_zIkDir6IaIaXRjw&oe=691A146A",
      path: "others",
    },
  ];

  return (
    <section
      className="bg-cover bg-no-repeat bg-center py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(28,27,31,0.6)), url(${blackBg})`,
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ===== Section Header ===== */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-[#e4d804] text-sm font-medium tracking-wide mb-2 uppercase">
            Make Your Choice
          </p>
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl mb-3">
            All Mobiles & Categories
          </h2>
          <div className="w-24 h-1 bg-[#e4d804] mx-auto rounded-full"></div>
        </div>

        {/* ===== Phone Image Cards ===== */}
        <div className="flex flex-col items-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">
            Choose Your Phone
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
            {phones.map((phone, index) => (
              <button
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl 
                transition-all duration-300 group focus:outline-none border border-gray-700"
              >
                <Link to={phone.path}>
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  >
                    <span className="text-white text-lg font-semibold tracking-wide">
                      {phone.name}
                    </span>
                  </div>
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllMobiles;
