import { useState, useEffect } from "react";

const usePageMetrics = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [totalPageHeight, setTotalPageHeight] = useState(document.documentElement.scrollHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // স্ক্রিন প্রস্থ আপডেট হবে
      setTotalPageHeight(document.documentElement.scrollHeight); // পৃষ্ঠার মোট উচ্চতা ঠিক হবে
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY); // বর্তমান স্ক্রল মান আপডেট হবে
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // ইভেন্ট পরিষ্কার করার জন্য রিমুভ
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { screenWidth, scrollPosition, totalPageHeight };
};

export default usePageMetrics;
