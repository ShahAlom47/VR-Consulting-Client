import  { createContext, useState, useEffect, useRef } from "react";

export  const PageMetricsContext = createContext();

// eslint-disable-next-line react/prop-types
export const PageMetricsProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [totalPageHeight, setTotalPageHeight] = useState(document.documentElement.scrollHeight);
  const [homeComponentHeight, setHomeComponentHeight] = useState(0);

  const homeRef = useRef(null); 

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setTotalPageHeight(document.documentElement.scrollHeight);
      updateHomeHeight();
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const updateHomeHeight = () => {
      if (homeRef.current) {
        setHomeComponentHeight(homeRef.current.getBoundingClientRect().height);
      }
    };

    updateHomeHeight();

  
    const observer = new ResizeObserver(updateHomeHeight);
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <PageMetricsContext.Provider
      value={{
        screenWidth,
        scrollPosition,
        totalPageHeight,
        homeComponentHeight,
        homeRef,
      }}
    >
      {children}
    </PageMetricsContext.Provider>
  );
};


