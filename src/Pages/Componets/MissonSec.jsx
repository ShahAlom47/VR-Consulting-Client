import { useEffect, useRef, useState } from "react";
import { SiChessdotcom } from "react-icons/si";

const MissionSec = () => {
    const sectionRef = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const iconBoxes = useRef([]);
    const [leftPositions, setLeftPositions] = useState(25); // Start position of the icon
    const [iconOpacity, setIconOpacity] = useState(1); // Controls the opacity of the icon

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrollY = window.scrollY - sectionRef.current.offsetTop;
                setCurrentScroll(scrollY);

                // Check the scroll position and update the left position accordingly
                let newLeftPosition = 15; // Default start position
                let newOpacity = 1; // Default opacity

                if (scrollY > 0 && scrollY <= 1000) {
                    // Move right on the first grid
                    newLeftPosition = 15 + (scrollY / 1000) * 50;
                } else if (scrollY > 1000 && scrollY <= 2000) {
                    // Move left on the second grid
                    newLeftPosition = 85 - ((scrollY - 1000) / 1000) * 50;
                } else if (scrollY > 2000) {
                    // Continue moving right on the third grid
                    newLeftPosition = 15 + ((scrollY - 2000) / 1000) * 50;

                    // Fade out the icon as it moves outside the section
                    newOpacity = 1 - (scrollY - 2200) / 1000;
                    if (newOpacity < 0) newOpacity = 0; // Ensure opacity doesn't go below 0
                }

                setLeftPositions(newLeftPosition);
                setIconOpacity(newOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]); // Listen for changes in currentScroll

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[300vh]">
            {/* Sticky Container for Fixed Content */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                {/* Section 1: Mission Header */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentScroll < 500 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <h1 className="text-white text-[150px] font-medium">Mission</h1>
                </div>
            </div>

            {/* Section 2: Content and Icon */}
            <div className={`absolute w-full h-full bg-black transition-all duration-500 ${currentScroll >= 500 ? "opacity-100 z-40" : "opacity-0 z-0"}`}>
                {/* Moving Icon */}
                <SiChessdotcom
                    style={{ right: `${leftPositions}%`, opacity: iconOpacity }}
                    className={`${
                        currentScroll >= 800 ? "opacity-100 z-40" : "opacity-0 z-0"
                    } text-white fixed top-1/2 text-[400px] transition-transform ease-in-out duration-1000`}
                />

                <div className="h-full w-full">
                    {/* First Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div ref={(el) => (iconBoxes.current[0] = el)} className="bg-black py-9 flex items-center justify-center" id="iconBox"></div>
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                    </div>

                    {/* Second Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                        <div ref={(el) => (iconBoxes.current[1] = el)} className="bg-black py-9 flex items-center justify-center" id="iconBox"></div>
                    </div>

                    {/* Third Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen">
                        <div ref={(el) => (iconBoxes.current[2] = el)} className="bg-black py-9 flex items-center justify-center" id="iconBox"></div>
                        <div className="bg-stone-500 py-9 flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSec;
