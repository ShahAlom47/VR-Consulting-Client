import { useEffect, useRef, useState } from "react";
import { SiChessdotcom } from "react-icons/si";

const MissionSec = () => {
    const sectionRef = useRef(null);
    const iconRef = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const totalSections = 8; // Total number of sections
    const iconBoxes = useRef([]);

  
   
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY - sectionRef.current.offsetTop;
        setCurrentScroll(scrollY);

        // Find the closest iconBox
        let closestBox = null;
        let minDistance = Infinity;

        iconBoxes.current.forEach((box) => {
          const boxRect = box.getBoundingClientRect();
          const centerY = boxRect.top + boxRect.height / 2;
          const centerX = boxRect.left + boxRect.width / 2;
          const distance = Math.abs(centerY - window.innerHeight / 2);

          if (distance < minDistance) {
            minDistance = distance;
            closestBox = box;
          }
        });

        // Move icon to the closest box
        if (closestBox && iconRef.current) {
          const boxRect = closestBox.getBoundingClientRect();
          const centerY = boxRect.top + boxRect.height / 2;
          const centerX = boxRect.left + boxRect.width / 2;
          const verticalOffset = centerY - window.innerHeight / 2;
          const horizontalOffset = centerX - window.innerWidth / 2;

          // Calculate left position between 1/4 and 3/4 based on scrollY
          const leftPosition = `calc(25% + ${(scrollY / 1000) * 50}%)`; // Adjust the divisor and multiplier for desired effect
console.log(leftPosition);
        //   iconRef.current.style.transform = `translateY(${verticalOffset - 25}px) translateX(${horizontalOffset}px)`;
          iconRef.current.style.left = leftPosition; // Dynamically update the left position
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScroll]); 

    return (
        <div ref={sectionRef} className="relative bg-black min-h-[300vh]">
            {/* Sticky Container for Fixed Content */}
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                {/* Section 1: Mission Header */}
                <div className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentScroll < 500 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <h1 className="text-white text-[150px] font-medium">Mission</h1>
                </div>
            </div>

            {/* Section 2: Content and Icon */}
            <div className={`absolute  w-full h-full bg-black transition-all duration-500 ${currentScroll >= 500 ? "opacity-100 z-40" : "opacity-0 z-0"}`}>
                {/* Moving Icon */}
                <SiChessdotcom ref={iconRef} className=" bb bedisa  left-1/4 theke left3/4 text-white fixed  top-1/2 text-[200px] transition-transform duration-500" />

                <div className="h-full w-full">
                    {/* First Grid */}
                    <div className="grid grid-cols-2 w-full min-h-screen ">
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
