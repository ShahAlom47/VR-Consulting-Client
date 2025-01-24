import { useState, useEffect, useRef } from "react";

const SupportSec = () => {
  const firstContentRef = useRef(null); // Prothom content er reference
  const secondContentRef = useRef(null); // Ditiyo content er reference
  const thirdContentRef = useRef(null); // Tritiyo content er reference

  const [currentContentIndex, setCurrentContentIndex] = useState(0); // Konta content dekhabe, ta track kora
  console.log(currentContentIndex);

  // Scroll handle korar jonno function
  const handleScroll = () => {
    if (!firstContentRef.current || !secondContentRef.current || !thirdContentRef.current) return;

    // Prottek content er position ber kora
    const firstContentRect = firstContentRef.current.getBoundingClientRect();
    const secondContentRect = secondContentRef.current.getBoundingClientRect();
    const thirdContentRect = thirdContentRef.current.getBoundingClientRect();
    console.log(firstContentRect.bottom);

    // Jodi prothom content purono hoye jai, taile second content dekhabe
    if (firstContentRect.top <= 0 && secondContentRect.top >= window.innerHeight) {
      setCurrentContentIndex(1); // 2nd content show
    }

    // Ditiyo content purono hoye jai, taile tritiyo content dekhabe
    if (secondContentRect.top <= 0 && thirdContentRect.top >= window.innerHeight) {
      setCurrentContentIndex(2); // 3rd content show
    }

    // Jodi scroll up kora hoy, taile firay first content dekhabe
    if (thirdContentRect.bottom >= window.innerHeight) {
      setCurrentContentIndex(0); // Firay first content show
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Scroll detect korbe

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup korbe
    };
  }, []);

  return (
    <div className="relative bg-black min-h-[300vh]">
      {/* Prothom content */}
      <div
        ref={firstContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-slate-600 text-white  top-0 z-10 transition-all duration-500 ease-in-out ${
          currentContentIndex === 0 ? "opacity-100 visible sticky" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 1</h1>
        <p className="text-lg">We Support You in Multiple Areas</p>
      </div>

      {/* Ditiyo content */}
      <div
        ref={secondContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-blue-500 text-white sticky top-0 z-0 transition-all duration-500 ease-in-out ${
          currentContentIndex === 1 ? "opacity-100 visible sticky" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 2</h1>
        <p className="text-lg">Our Support Expands in More Areas</p>
      </div>

      {/* Tritiyo content */}
      <div
        ref={thirdContentRef}
        className={`min-h-screen w-full flex flex-col items-center justify-center bg-green-500 text-white  top-0 z-0 transition-all duration-500 ease-in-out ${
          currentContentIndex === 2 ? "opacity-100 visible sticky" : "opacity-0 invisible"
        }`}
      >
        <h1 className="text-5xl">Content 3</h1>
        <p className="text-lg">We Offer Complete Solutions</p>
      </div>
    </div>
  );
};

export default SupportSec;
