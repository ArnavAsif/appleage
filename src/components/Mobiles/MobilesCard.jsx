import { FaStar } from "react-icons/fa";
import { RiPriceTag3Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Link } from "react-router";

export const mobiles = [
  {
    id: 1,
    model: "iPhone 14 Pro",
    brand: "Apple",
    network: "5G",
    dimensions: "147.5 x 71.5 x 7.85 mm",
    sim: "Dual SIM (Nano-SIM/eSIM)",
    display_type: "Super Retina XDR OLED",
    display_size: "6.1 inches",
    display_resolution: "1170 x 2532 pixels",
    os: "iOS 16",
    chipset: "Apple A16 Bionic",
    cpu: "Hexa-core",
    weight: "206g",
    memory: "128GB 6GB RAM",
    main_camera: "48 MP + 12 MP + 12 MP",
    selfie_camera: "12 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 3200 mAh, non-removable",
    sensor: "Face ID, accelerometer, gyro, proximity, compass, barometer",
    image:
      "https://belizemobile.com/cdn/shop/products/apple-iphone-14-pro-3.jpg?v=1678214479&width=550",
    used: false,
    inStock: true,
    price: 155000,
  },
  {
    id: 2,
    model: "Galaxy S23 Ultra",
    brand: "Samsung",
    network: "5G",
    dimensions: "163.4 x 78.1 x 8.9 mm",
    sim: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)",
    display_type: "Dynamic AMOLED 2X",
    display_size: "6.8 inches",
    display_resolution: "1440 x 3088 pixels",
    os: "Android 13, One UI 5",
    chipset: "Snapdragon 8 Gen 2",
    cpu: "Octa-core",
    weight: "234g",
    memory: "256GB 12GB RAM",
    main_camera: "200 MP + 10 MP + 10 MP + 12 MP",
    selfie_camera: "12 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 5000 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer",
    image:
      "https://mobilebuzzbd.com/wp-content/uploads/2023/07/Galaxy-S23-Ultra-Phantom-Black.jpg",
    used: true,
    inStock: true,
    price: 185000,
  },
  {
    id: 3,
    model: "Pixel 8 Pro",
    brand: "Google",
    network: "5G",
    dimensions: "162.6 x 76.6 x 8.9 mm",
    sim: "eSIM + Nano-SIM",
    display_type: "LTPO OLED",
    display_size: "6.7 inches",
    display_resolution: "1440 x 3120 pixels",
    os: "Android 14",
    chipset: "Google Tensor G3",
    cpu: "Octa-core",
    weight: "221g",
    memory: "128GB 12GB RAM",
    main_camera: "50 MP + 48 MP + 12 MP",
    selfie_camera: "11 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Po 5000 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer",
    image:
      "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FPixel-8-Pro-Obsidian-7046.jpg&w=640&q=100",
    used: false,
    inStock: true,
    price: 145000,
  },
  {
    id: 4,
    model: "OnePlus 11",
    brand: "OnePlus",
    network: "5G",
    dimensions: "163 x 74.1 x 8.5 mm",
    sim: "Dual SIM (Nano-SIM, dual stand-by)",
    display_type: "Fluid AMOLED",
    display_size: "6.7 inches",
    display_resolution: "1440 x 3216 pixels",
    os: "Android 13, OxygenOS 13",
    chipset: "Snapdragon 8 Gen 2",
    cpu: "Octa-core",
    weight: "205g",
    memory: "256GB 12GB RAM",
    main_camera: "50 MP + 48 MP + 32 MP",
    selfie_camera: "16 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Po 5000 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass",
    image:
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/OnePlus/OnePlus%2011/Oneplus11-600x600.png",
    used: true,
    inStock: false,
    price: 120000,
  },
  {
    id: 5,
    model: "iPhone 13",
    brand: "Apple",
    network: "5G",
    dimensions: "146.7 x 71.5 x 7.65 mm",
    sim: "Dual SIM (Nano-SIM/eSIM)",
    display_type: "Super Retina XDR OLED",
    display_size: "6.1 inches",
    display_resolution: "1170 x 2532 pixels",
    os: "iOS 15",
    chipset: "Apple A15 Bionic",
    cpu: "Hexa-core",
    weight: "174g",
    memory: "128GB 4GB RAM",
    main_camera: "12 MP + 12 MP",
    selfie_camera: "12 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 3240 mAh, non-removable",
    sensor: "Face ID, accelerometer, gyro, proximity, compass, barometer",
    image:
      "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2F3408-30421.jpg&w=640&q=100",
    used: false,
    inStock: false,
    price: 95000,
  },
  {
    id: 6,
    model: "Galaxy A54",
    brand: "Samsung",
    network: "5G",
    dimensions: "158.2 x 76.7 x 8.2 mm",
    sim: "Dual SIM (Nano-SIM, dual stand-by)",
    display_type: "Super AMOLED",
    display_size: "6.4 inches",
    display_resolution: "1080 x 2340 pixels",
    os: "Android 13, One UI 5.1",
    chipset: "Exynos 1380",
    cpu: "Octa-core",
    weight: "202g",
    memory: "128GB 6GB RAM",
    main_camera: "50 MP + 12 MP + 5 MP",
    selfie_camera: "32 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 5000 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass",
    image:
      "https://mobilebuzzbd.com/wp-content/uploads/2023/08/Galaxy-A54-Lime.webp",
    used: true,
    inStock: true,
    price: 55000,
  },
  {
    id: 7,
    model: "Pixel 7",
    brand: "Google",
    network: "5G",
    dimensions: "155.6 x 73.2 x 8.7 mm",
    sim: "eSIM + Nano-SIM",
    display_type: "OLED",
    display_size: "6.3 inches",
    display_resolution: "1080 x 2400 pixels",
    os: "Android 13",
    chipset: "Google Tensor G2",
    cpu: "Octa-core",
    weight: "197g",
    memory: "128GB 8GB RAM",
    main_camera: "50 MP + 12 MP",
    selfie_camera: "10.8 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Po 4355 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass",
    image:
      "https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FPixel-7-Pro-Hazel-6784.jpg&w=640&q=100",
    used: false,
    inStock: false,
    price: 80000,
  },
  {
    id: 8,
    model: "OnePlus Nord 2T",
    brand: "OnePlus",
    network: "5G",
    dimensions: "158.9 x 73.2 x 8.3 mm",
    sim: "Dual SIM (Nano-SIM, dual stand-by)",
    display_type: "Fluid AMOLED",
    display_size: "6.43 inches",
    display_resolution: "1080 x 2400 pixels",
    os: "Android 12, OxygenOS 12.1",
    chipset: "MediaTek Dimensity 1300",
    cpu: "Octa-core",
    weight: "190g",
    memory: "128GB 8GB RAM",
    main_camera: "50 MP + 8 MP + 2 MP",
    selfie_camera: "32 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Po 4500 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass",
    image:
      "https://assets.gadgetandgear.com/upload/product/20221019_1666158348_422691.jpeg",
    used: true,
    inStock: true,
    price: 45000,
  },
  {
    id: 9,
    model: "iPhone SE (2022)",
    brand: "Apple",
    network: "4G LTE",
    dimensions: "138.4 x 67.3 x 7.3 mm",
    sim: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, eSIM)",
    display_type: "Retina IPS LCD",
    display_size: "4.7 inches",
    display_resolution: "750 x 1334 pixels",
    os: "iOS 15",
    chipset: "Apple A15 Bionic",
    cpu: "Hexa-core",
    weight: "144g",
    memory: "64GB 3GB RAM",
    main_camera: "12 MP",
    selfie_camera: "7 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 2018 mAh, non-removable",
    sensor: "Fingerprint (front), accelerometer, gyro, proximity, compass",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-0.jpg",
    used: false,
    inStock: true,
    price: 55000,
  },
  {
    id: 10,
    model: "Samsung Galaxy Z Fold 5",
    brand: "Samsung",
    network: "5G",
    dimensions: "158.2 x 128.1 x 6.1 mm (unfolded)",
    sim: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)",
    display_type: "Dynamic AMOLED 2X / Foldable",
    display_size: "7.6 inches (main) / 6.2 inches (cover)",
    display_resolution: "2208 x 1768 pixels (main) / 2316 x 904 pixels (cover)",
    os: "Android 13, One UI 5.1",
    chipset: "Snapdragon 8 Gen 2",
    cpu: "Octa-core",
    weight: "253g",
    memory: "512GB 12GB RAM",
    main_camera: "50 MP + 12 MP + 10 MP",
    selfie_camera: "10 MP + 4 MP",
    sound: "Stereo speakers",
    battery_info: "Li-Ion 4400 mAh, non-removable",
    sensor:
      "Fingerprint (under display), accelerometer, gyro, proximity, compass, barometer",
    image:
      "https://www.custommacbd.com/cdn/shop/files/Galaxy-Z-Fold5-Blue-Custom-Mac-BD.jpg?v=1693119336",
    used: true,
    inStock: true,
    price: 285000,
  },
];

const MobilesCard = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      grabCursor={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={3000}
      loop={true}
      className="p-8 bg-gradient-to-b from-black via-zinc-900 to-black"
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
    >
      {mobiles.map((mobile) => (
        <SwiperSlide key={mobile.id} className="group">
          <Link
            to={`/mobile/${mobile.id}`}
            className="relative bg-zinc-900/80 backdrop-blur-md text-white rounded-2xl shadow-lg overflow-hidden
          border border-zinc-800 hover:border-zinc-700 transition-all duration-500
          hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 block"
          >
            {/* Image Section */}
            <div className="relative flex items-center justify-center h-80 bg-gradient-to-b from-zinc-800 to-zinc-900">
              <img
                src={mobile.image}
                alt={mobile.model}
                className="h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* Stock Badge */}
              <div className="absolute top-3 left-3">
                {mobile.inStock ? (
                  <div className="px-2 py-1 rounded-md bg-green-600 text-xs font-semibold shadow-md">
                    In Stock
                  </div>
                ) : (
                  <div className="px-2 py-1 rounded-md bg-red-600 text-xs font-semibold shadow-md">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-green-500/10 via-transparent to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                {mobile.model}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Storage: <span className="text-gray-300">{mobile.memory}</span>
              </p>

              <div className="flex items-center justify-between text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <RiPriceTag3Line className="text-green-400" /> {mobile.price}{" "}
                  BDT
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {mobile.network}
                </span>
              </div>
            </div>

            {/* Subtle Under Glow on Hover */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobilesCard;
