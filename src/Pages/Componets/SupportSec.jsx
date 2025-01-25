import { useState, useEffect, useRef } from "react";
import usePageMetrics from "../../CustomHocks/usePageMetrics";

const SupportSec = () => {
  const { supportComponentHeight, supportRef } = usePageMetrics();

  const firstContentRef = useRef(null);
  const secondContentRef = useRef(null);
  const thirdContentRef = useRef(null);

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleScroll = () => {
    if (!firstContentRef.current || !secondContentRef.current || !thirdContentRef.current) return;

    const firstContentRect = firstContentRef.current.getBoundingClientRect();
    const secondContentRect = secondContentRef.current.getBoundingClientRect();
    const thirdContentRect = thirdContentRef.current.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    // Check for the first content visibility
    if (firstContentRect.top <= viewportHeight / 2 && firstContentRect.bottom >= viewportHeight / 2) {
      setCurrentContentIndex(0);
    }

    // Check for the second content visibility
    if (secondContentRect.top <= viewportHeight / 2 && secondContentRect.bottom >= viewportHeight / 2) {
      setCurrentContentIndex(1);
    }

    // Check for the third content visibility
    if (thirdContentRect.top <= viewportHeight / 2 && thirdContentRect.bottom >= viewportHeight / 2) {
      setCurrentContentIndex(2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={supportRef} className="relative bg-black min-h-[300vh]">
      {/* First content */}
      <div
        ref={firstContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-slate-600 text-white top-0 z-10 transition-opacity duration-500 ease-in-out ${
          currentContentIndex === 0 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 1</h1>
        <p className="text-lg">We Support You in Multiple Areas</p>
      </div>

      {/* Second content */}
      <div
        ref={secondContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-blue-500 text-white top-0 z-10 transition-opacity duration-500 ease-in-out ${
          currentContentIndex === 1 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 2</h1>
        <p className="text-lg">Our Support Expands in More Areas</p>
      </div>

      {/* Third content */}
      <div
        ref={thirdContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-green-500 text-white top-0 z-10 transition-opacity duration-500 ease-in-out ${
          currentContentIndex === 2 ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 3</h1>
        <p className="text-lg">We Offer Complete Solutions</p>
      </div>
    </div>
  );
};

export default SupportSec;
