import React, { useState } from "react";
import map from "../../assets/map.svg";

const ContactUs = () => {
  // === Form State ===
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  // === Input Change Handler ===
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // === Submit Handler ===
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    // Optionally send formData to a backend API here.
    alert("Thank you! Your message has been sent successfully.");

    // Reset form after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="text-white px-4 lg:w-10/12 mx-auto relative z-10">
      <div className="max-w-[1034px] mx-auto py-[96px] relative z-10">
        <h1 className="text-[34px]/[64px] lg:text-6xl/[64px] font-extrabold text-center tracking-[-3%] font-figtree">
          Contact Us
        </h1>
        <p className="font-mulish lg:text-lg/[24px] tracking-[0%] text-center my-[10px] text-gray-300">
          Have a question or need assistance finding your next phone? We're here
          to help! Whether you're buying a new device, selling your old one, or
          exploring accessories, our team is ready to guide you. Fill out the
          form below or reach out directly — we’d love to hear from you!
        </p>
        <p className="text-[#D8D8D8] font-mulish lg:text-lg/[24px] tracking-[0%] font-bold text-center">
          {"Home > Contact"}
        </p>
      </div>

      <div className="max-w-[1173px] mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-10 relative z-10">
        {/* ==== Contact Info ==== */}
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <div>
            <h2 className="lg:hidden text-[34px] md:text-6xl text-[#FAFAFA] font-extrabold mb-[30px]">
              Contact Us
            </h2>

            <img
              className="hidden lg:flex mb-[30px] w-fit"
              src={map}
              alt="Map"
            />

            <div className="flex flex-col md:flex-row gap-10 md:gap-[54px]">
              {/* Bangladesh Office */}
              <div className="mb-8">
                <h4 className="font-semibold text-[#FAFAFA] mb-[9px]">
                  BANGLADESH OFFICE
                </h4>
                <p className="text-[#FAFAFA] leading-relaxed">
                  Shop No: 31, Level 04, Block : C
                  <br />
                  Jamuna Future Park
                  <br />
                  Dhaka-1219
                </p>
                <p className="mt-3 md:mt-[52px]">
                  Phone:{" "}
                  <a
                    href="tel:+8801309296713"
                    className="text-[#2176F5] hover:underline"
                  >
                    +880 1569125448
                  </a>
                </p>
                <p className="mt-[13px]">
                  Email:{" "}
                  <a
                    href="mailto:ageapple92@gmail.com"
                    className="text-[#2176F5] hover:underline"
                  >
                    ageapple92@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==== Contact Form ==== */}
        <div className="flex-1 max-w-[514px] w-full bg-[#202123] shadow-md rounded-lg">
          <div className="py-[55px] px-[42px]">
            <h3 className="text-xl font-bold mb-[34px]">Ask Us Anything!</h3>
            <form className="space-y-[18px]" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="flex-1">
                  <label className="block text-sm mb-1">First name*</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Last name*</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  What can we help you with?
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E40017] text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
