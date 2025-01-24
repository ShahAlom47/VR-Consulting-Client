import { createContext, useState, useEffect, useRef } from "react";

export const PageMetricsContext = createContext();

// eslint-disable-next-line react/prop-types
export const PageMetricsProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [totalPageHeight, setTotalPageHeight] = useState(document.documentElement.scrollHeight);
  const [homeComponentHeight, setHomeComponentHeight] = useState(0);
  const [aboutComponentHeight, setAboutComponentHeight] = useState(0);
  const [supportComponentHeight, setSupportComponentHeight] = useState(0);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setTotalPageHeight(document.documentElement.scrollHeight);
      updateHeights();
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const updateHeights = () => {
      if (homeRef.current) {
        setHomeComponentHeight(homeRef.current.getBoundingClientRect().height);
      }
      if (aboutRef.current) {
        setAboutComponentHeight(aboutRef.current.getBoundingClientRect().height);
      }
      if (supportRef.current) {
        setSupportComponentHeight(supportRef.current.getBoundingClientRect().height);
      }
    };

    const observer = new ResizeObserver(updateHeights);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (supportRef.current) observer.observe(supportRef.current);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial height calculation
    updateHeights();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (supportRef.current) observer.unobserve(supportRef.current);

      observer.disconnect();
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
        supportComponentHeight,
        homeRef,
        aboutRef,
        supportRef,
      }}
    >
      {children}
    </PageMetricsContext.Provider>
  );
};
