import { useEffect, useRef, useState } from "react";
import { BiSolidFactory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMoneyBillWheat } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SupportSec = () => {
  const supportRef = useRef(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Total number of sections
  const sections = 3;

  // console.log(currentContentIndex);
  // Handle scroll and calculate position
  useEffect(() => {
    const handleScroll = () => {
      if (supportRef.current) {
        const sectionHeight = window.innerHeight; // Height of each section
        const scrollY = window.scrollY - supportRef.current.offsetTop; // Scroll position relative to the component

        if (scrollY >= 0) {
          const newIndex = Math.min(
            Math.floor(scrollY / sectionHeight),
            sections - 1
          );
          setCurrentContentIndex(newIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const boxTexts = [
    [
      {
        icon: <FaUser />,
        title: "Private insurance for the managing director",
        description:
          "Everything you need to sleep soundly at night as a managing director. You enjoy a special status, but you are also exposed to special dangers.",
      },
      {
        icon: <FaArrowRightArrowLeft />,
        title: "Corporate Legal Solutions",
        description:
          "Helping you navigate corporate legal challenges with ease. Ensuring compliance and success for your business.",
      },
      {
        icon: <FaArrowRightArrowLeft />,
        title: "Personal Finance Guidance",
        description:
          "Achieve your financial goals with our expert advice tailored to your needs. Stability and growth are within reach.",
      },
    ],

    [
      {
        icon: <FaMoneyBillWheat />,
        title: "Private insurance for the managing director",
        description:
          "Everything you need to sleep soundly at night as a managing director. You enjoy a special status, but you are also exposed to special dangers.",
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: "Corporate Legal Solutions",
        description:
          "Helping you navigate corporate legal challenges with ease. Ensuring compliance and success for your business.",
      },
      {
        icon: <BiSolidFactory />,
        title: "Personal Finance Guidance",
        description:
          "Achieve your financial goals with our expert advice tailored to your needs. Stability and growth are within reach.",
      },
    ],
  ];

  return (
    <div ref={supportRef} className="relative bg-black min-h-[300vh]">
      {/* Fixed container for sticky content */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">

        {/* Section 1 */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentContentIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <h1 className="text-white text-[350px] font-medium">6</h1>
          <p className="text-white text-2xl -mt-20">
            We Support You
            <span className="text-gray-500">
              in <br /> these six areas
            </span>
          </p>
        </div>

        {/* Section 2 */}
        <div
          className={`absolute w-full h-full bg-black transition-opacity duration-1000 ${currentContentIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="grid grid-cols-3 w-full h-full">
            {/* Left box with animation */}
            <div className="bg-black relative overflow-hidden">
              {boxTexts[0][0].icon}
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[0][0].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[0][0].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[0][0].description}</p>
              </div>
            </div>

            {/* Empty spaces */}
            <div className="bg-gray-800"></div>
            <div className="bg-black">
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[0][1].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[0][1].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[0][1].description}</p>
              </div>
            </div>

            <div className="bg-gray-800"></div>

            {/* Another box */}
            <div className="bg-black">
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[0][2].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[0][2].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[0][2].description}</p>
              </div>
            </div>

            <div className="bg-gray-800"></div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className={`absolute w-full h-full bg-black transition-opacity duration-1000 ${currentContentIndex === 2 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div className="grid grid-cols-3 w-full h-full">
            {/* Left box with animation */}
            <div className="bg-black relative overflow-hidden">
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[1][0].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[1][0].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[1][0].description}</p>
              </div>
            </div>

            {/* Empty spaces */}
            <div className="bg-gray-800"></div>
            <div className="bg-black">
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[1][1].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[1][1].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[1][1].description}</p>
              </div>
            </div>

            <div className="bg-gray-800"></div>

            {/* Another box */}
            <div className="bg-black">
              <div
                className={`p-6 h-full w-full transition-transform duration-700 ${currentContentIndex === 2 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-yellow-600 rounded-lg p-3 text-4xl flex justify-center items-center mb-6 bg-yellow-950 w-20 h-20">
                  {boxTexts[1][2].icon}
                </p>
                <h1 className="text-white font-semibold text-4xl">{boxTexts[1][2].title}</h1>
                <p className="text-gray-400 text-lg">{boxTexts[1][2].description}</p>
              </div>
            </div>

            <div className="bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSec;
