import trailBg from "../assets/input bg.png";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${trailBg})` }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[#171d22] text-2xl sm:text-3xl md:text-4xl font-bold">
              Share Your Thoughts
            </h2>
            <p className="text-[#171d22] text-sm sm:text-base font-medium mt-2 sm:mt-3 md:mt-4">
              Enter your email to create or restart your membership.
            </p>
          </div>

          {/* Input + Button */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-2 sm:px-0">
            <div className="relative w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 sm:py-4 pr-32 sm:pr-36 pl-4 bg-white shadow-2xl border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-yellow-400 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-800 transition-all text-sm sm:text-base">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral">
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 w-10/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <aside className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current mb-3"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <p>
              Apple Age Ltd.
              <br />
              Providing reliable tech since 2022
            </p>
          </aside>
          <nav className="text-center sm:text-left">
            <h6 className="footer-title mb-4">Social</h6>
            <div className="grid grid-flow-col gap-4 justify-center sm:justify-start">
              <a href="https://www.tiktok.com/@apple.age0" target="_blank">
                <FaTiktok className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560462818519"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
