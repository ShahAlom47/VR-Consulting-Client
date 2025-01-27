import { useEffect, useRef, useState } from "react";
import { SiChessdotcom } from "react-icons/si";

const MissionSec = () => {
    const sectionRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0)
    console.log(currentScroll);
    const totalSections = 8; // Total number of sections

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionHeight = sectionRef.current.clientHeight / totalSections; // Dynamically calculate section height
                const scrollY = window.scrollY - sectionRef.current.offsetTop; // Scroll position relative to the component

                console.log("Scroll Y:", scrollY);
                console.log("Section Height:", sectionHeight);

                if (scrollY >= 0) {
                    setCurrentScroll(scrollY)
                    const newSectionIndex = Math.min(
                        Math.floor(scrollY / sectionHeight),
                        totalSections - 1
                    );
                    setCurrentSection(newSectionIndex);
                    console.log("Current Section:", newSectionIndex);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[300vh]">
            {/* Sticky Container for Fixed Content */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                {/* Section 1: Mission Header */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentSection < 2 ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <h1 className="text-white text-[150px] font-medium">Mission</h1>
                </div>
            </div>

            {/* Section 2: Content and Icon */}
            <div
                className={`absolute w-full h-full bg-black transition-all duration-500 ${currentSection >= 3 ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
            >
                {/* Moving Icon */}
                <SiChessdotcom
                    className={`text-white sticky text-[500px]`}
                />



                <div className="h-full w-full">
                    {/* First Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                    </div>

                    {/* Second Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                    </div>

                    {/* Third Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSec;
