import { useEffect, useRef, useState } from "react";
import { BiSolidFactory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaMoneyBillWheat } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MissionSec = () => {
    const supportRef = useRef(null);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    // Total number of sections
    const sections = 4;

    console.log(currentContentIndex);
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
                    <h1 className="text-white text-[250px] font-medium">Mission</h1>

                </div>


            </div>
            {/* Section 2 */}
            <div
                className={` absolute w-full h-full bg-black transition-opacity duration-1000  bb ${currentContentIndex > 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
                <div className="  h-full w-full ">
                    <div className="  grid grid-cols-2 w-full  min-h-screen ">
                        <div className="bg-black py-9">

                        </div>
                        <div className="bg-stone-500 py-9">

                        </div>
                    </div>
                    <div className="  grid grid-cols-2 w-full  min-h-screen ">
                        <div className="bg-stone-500 py-9">

                        </div>
                        <div className="bg-black py-9">

                        </div>

                    </div>
                    <div className="  grid grid-cols-2 w-full  min-h-screen ">
                        <div className="bg-black py-9">

                        </div>
                        <div className="bg-stone-500 py-9">

                        </div>
                    </div>





                </div>

            </div>
        </div>
    );
};

export default MissionSec;
