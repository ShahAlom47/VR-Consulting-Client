import  { createContext, useState, useEffect, useRef } from "react";

export  const PageMetricsContext = createContext();

// eslint-disable-next-line react/prop-types
export const PageMetricsProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [totalPageHeight, setTotalPageHeight] = useState(document.documentElement.scrollHeight);
  const [homeComponentHeight, setHomeComponentHeight] = useState(0);
  const [aboutComponentHeight, setAboutComponentHeight] = useState(0);

  const homeRef = useRef(null); 
  const aboutRef = useRef(null); 

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
    const updateAboutHeight = () => {
      if (homeRef.current) {
        setAboutComponentHeight(aboutRef.current.getBoundingClientRect().height);
      }
    };

    updateHomeHeight();
    updateAboutHeight()

  
    const observer = new ResizeObserver(updateHomeHeight);
    const observerAbout = new ResizeObserver(updateAboutHeight);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      observerAbout.observe(aboutRef.current);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (aboutRef.current) {
        observerAbout.unobserve(aboutRef.current);
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
        aboutComponentHeight,
        homeRef,
        aboutRef,
      }}
    >
      {children}
    </PageMetricsContext.Provider>
  );
};


