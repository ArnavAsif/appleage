import { useParams, Link } from "react-router-dom";
import { mobiles } from "./MobilesCard";
import { useEffect } from "react";

const MobileDetails = () => {
  const { id } = useParams();
  const mobile = mobiles.find((m) => m.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!mobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <h2 className="text-3xl font-bold mb-4">Mobile not found!</h2>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center bg-gradient-to-br from-indigo-700 to-red-700 rounded-xl p-4 shadow-lg hover:scale-105 transform transition">
          <img
            src={mobile.image}
            alt={mobile.model}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 space-y-3">
          <h1 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            {mobile.model}
          </h1>
          <p className="text-gray-400 text-lg">{mobile.brand}</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <Detail label="Network" value={mobile.network} />
            <Detail label="Dimensions" value={mobile.dimensions} />
            <Detail label="SIM" value={mobile.sim} />
            <Detail label="Display Type" value={mobile.display_type} />
            <Detail label="Display Size" value={mobile.display_size} />
            <Detail label="Resolution" value={mobile.display_resolution} />
            <Detail label="OS" value={mobile.os} />
            <Detail label="Chipset" value={mobile.chipset} />
            <Detail label="CPU" value={mobile.cpu} />
            <Detail label="Weight" value={mobile.weight} />
            <Detail label="Memory" value={mobile.memory} />
            <Detail label="Main Camera" value={mobile.main_camera} />
            <Detail label="Selfie Camera" value={mobile.selfie_camera} />
            <Detail label="Sound" value={mobile.sound} />
            <Detail label="Battery" value={mobile.battery_info} />
            <Detail label="Sensors" value={mobile.sensor} />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-xl font-semibold">
              Price: <span className="text-green-400">{mobile.price} BDT</span>
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                mobile.inStock ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {mobile.inStock ? "Available" : "Out of Stock"}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                mobile.used ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {mobile.used ? "Used" : "New"}
            </span>
          </div>

          <div className="mt-6">
            <Link
              to="/"
              className="text-blue-400 hover:text-blue-500 hover:underline transition"
            >
              ← Back to mobiles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Detail rows
const Detail = ({ label, value }) => (
  <div className="bg-gray-800 rounded-lg p-3 shadow hover:bg-gray-700 transition">
    <p className="text-gray-400 text-sm">{label}</p>
    <p className="text-white font-medium">{value}</p>
  </div>
);

export default MobileDetails;
