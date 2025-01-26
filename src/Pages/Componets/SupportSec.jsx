import { useEffect, useRef, useState } from "react";

const SupportSec = () => {
  const supportRef = useRef(null);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Total number of sections
  const sections = 3;

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

  return (
    <div ref={supportRef} className="relative bg-black min-h-[300vh]">
      {/* Fixed container for sticky content */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
        
        {/* Section 1 */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-red-600 transition-opacity duration-1000 ${
            currentContentIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <h1 className="text-white text-4xl font-bold">Red Section</h1>
        </div>

        {/* Section 2 */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-blue-600 transition-opacity duration-1000 ${
            currentContentIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <h1 className="text-white text-4xl font-bold">Blue Section</h1>
        </div>

        {/* Section 3 */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-green-600 transition-opacity duration-1000 ${
            currentContentIndex === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <h1 className="text-white text-4xl font-bold">Green Section</h1>
        </div>

      </div>
    </div>
  );
};

export default SupportSec;
