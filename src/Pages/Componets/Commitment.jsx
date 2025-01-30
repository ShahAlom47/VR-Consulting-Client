import { useEffect, useRef, useState } from "react";
import { BiSolidFactory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Commitment = () => {
    const sectionRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("down");
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollPosition = window.scrollY - sectionTop;
                const scrollRatio = scrollPosition / sectionHeight;
                setScrollY(scrollRatio);

                if (window.scrollY > lastScrollY) {
                    setScrollDirection("down");
                } else {
                    setScrollDirection("up");
                }
                lastScrollY = window.scrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const boxTexts = [
        {
            icon: <FaUser />, 
            title: "Private insurance for the managing director", 
            description: "Everything you need to sleep soundly at night as a managing director. You enjoy a special status, but you are also exposed to special dangers."
        },
        {
            icon: <FaMoneyBillWheat />, 
            title: "Financial Security", 
            description: "Tailored financial solutions to ensure stability and long-term growth."
        },
        {
            icon: <IoIosCheckmarkCircle />, 
            title: "Corporate Legal Solutions", 
            description: "Helping you navigate corporate legal challenges with ease. Ensuring compliance and success for your business."
        },
        {
            icon: <BiSolidFactory />, 
            title: "Personal Finance Guidance", 
            description: "Achieve your financial goals with our expert advice tailored to your needs. Stability and growth are within reach."
        },
    ];

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[150vh] mx-auto overflow-hidden">
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000">
                    <h1 className="text-white text-[150px] font-medium">Commitment</h1>
                </div>
            </div>

            {/* Section 2: Content Grid */}
            <div className="absolute w-full h-full bg-black transition-all duration-500 min-h-[60vh]">
                <div className="grid grid-cols-4 gap-1 w-full px-10">
                    {boxTexts.map((box, index) => (
                        <div 
                            key={index} 
                            className="bg-zinc-900 p-6 rounded-lg shadow-lg  transition-transform duration-100"
                            style={{ 
                                transform: index ===1 || index === 2 ? `translateY(${scrollDirection === "down"  ? -scrollY * 50 : scrollY * 50}%)` :`translateY(${scrollDirection === "down"  ? scrollY * 50 : -scrollY * 50}%)`
                            }}
                        >
                            <p className="text-yellow-600 rounded-sm p-1 text-2xl flex justify-center items-center mb-2 bg-yellow-950 w-12 h-12 ">
                                {box.icon}
                            </p>
                            <h1 className="text-white font-semibold text-xl">{box.title}</h1>
                            <p className="text-gray-400  mt-2">{box.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Commitment;
