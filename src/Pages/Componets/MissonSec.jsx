import { useEffect, useRef, useState } from "react";
import { SiChessdotcom } from "react-icons/si";

const MissionSec = () => {
    const sectionRef = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [leftPositions, setLeftPositions] = useState(0); // Initial left position
    const [iconOpacity, setIconOpacity] = useState(1); 


    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const scrollY = window.scrollY - sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight; // Get the height of the section
                const scrollPercent = scrollY / sectionHeight;

                setCurrentScroll(scrollPercent);

                let newLeftPosition = 0; // Default start position in percentage
                let newOpacity = 2; // Default opacity

                if (scrollPercent >= 0 && scrollPercent <= 0.37) {
                    // First part, move right
                    newLeftPosition = 10;
                } else if (scrollPercent > 0.38 && scrollPercent <= 0.66) {
                    // Middle part, move to left
                    newLeftPosition = 400;
                } else if (scrollPercent > 0.66) {
                    // Final part, move right and fade out
                    newLeftPosition = 10;
                    newOpacity = 1 - (scrollPercent - 0.75); // Fade out effect
                    if (newOpacity < 0 || scrollPercent>0.60) newOpacity = 0; // Prevent opacity from going below 0
                }

                // Ensure left position stays between 20 and 80


                setLeftPositions(newLeftPosition);
                setIconOpacity(newOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentScroll]); // Track scroll position

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[300vh] mx-auto overflow-hidden">
            {/* Sticky Container for Fixed Content */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                {/* Section 1: Mission Header */}
                <div
                    className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentScroll < 0.31 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <h1 className="text-white text-[150px] font-medium">Mission</h1>
                </div>
            </div>

            {/* Section 2: Content and Icon */}
            <div className={`absolute w-full h-full bg-black transition-all duration-500 ${currentScroll >= 0.31  ? "opacity-100 z-40" : "opacity-0 z-0"}`}>
                {/* Moving Icon */}
                <div className="relative w-full overflow-hidden">
                    <SiChessdotcom
                        style={{
                            transform: `translateX(${leftPositions}%)`,
                            opacity: iconOpacity,
                        }}
                        className={`fixed top-1/3  transform text-white text-[300px] transition-all duration-[2000ms] ease-in-out`}
                    />
                </div>

                <div className="h-full w-full">
                    {/* First Grid */}
                    <div className="grid grid-cols-2 w-full min-h-[100vh]">
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                        <div className="bg-stone-950 py-9 flex items-center justify-center">
                            <p className="text-xl w-8/12 text-white">
                                Every entrepreneur comes to the point where an average insurance advisor is no longer enough. At least not when it comes to important financial decisions and you need someone at your side to provide you with strategic support.
                            </p>
                        </div>
                    </div>

                    {/* Second Grid */}
                    <div className="grid grid-cols-2 w-full min-h-[100vh]">
                        <div className="bg-stone-950 py-9 flex items-center justify-center">
                            <p className="text-xl w-8/12 text-white">
                                And yes, we know: Finance & insurance is not the most exciting topic for most people. We probably change that either.
                            </p>
                        </div>
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                    </div>

                    {/* Third Grid */}
                    <div className="grid grid-cols-2 w-full min-h-[100vh]">
                        <div className="bg-black py-9 flex items-center justify-center"></div>
                        <div className="bg-stone-950 py-9 flex items-center justify-center">
                            <p className="text-xl w-8/12 text-white">
                                But what we can do: Everything that goes with it. And in such a way that you can be 100% sure that your finances & insurance are in the best hands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSec;
