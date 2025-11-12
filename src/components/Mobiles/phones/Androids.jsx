import React, { useEffect, useState } from "react";
import { androids } from "../../../assets/allPhones";
import { Link } from "react-router";
import { AiOutlineSearch } from "react-icons/ai";

const Androids = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Filter phones based on search term (brand or model)
  const filteredPhones = androids.filter(
    (phone) =>
      phone.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phone.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-6 flex items-center max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
        <input
          type="text"
          placeholder="Search by brand or model..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="p-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
          <AiOutlineSearch className="text-white text-xl" />
        </button>
      </div>

      {/* Phones grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPhones.map((phone, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-700"
          >
            <img
              src={phone.img} // Make sure each phone object has an 'image' property
              alt={phone.brand}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{phone.model}</h2>
              <p className="text-gray-400 mt-1">{phone.priceBDT} BDT</p>
              <p
                className={`mt-2 font-medium ${
                  phone.inStock ? "text-green-500" : "text-red-500"
                }`}
              >
                {phone.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-gray-400 mt-1 text-sm">
                Battery: {phone.battery}
              </p>
              <Link to={`/mobiles/${phone.category}/${phone.id}`}>
                <button className="mt-4 w-full py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Androids;
