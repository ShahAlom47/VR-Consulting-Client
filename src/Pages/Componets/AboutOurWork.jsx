import { useEffect, useState } from "react";
import usePageMetrics from "../../CustomHocks/usePageMetrics";

const AboutOurWork = () => {
    const { aboutRef, aboutComponentHeight } = usePageMetrics(); // Reference to About section and height
    const [scrollPosition, setScrollPosition] = useState(0); // Scroll position state
    const [currentSectionPercent, setCurrentSectionPercent] = useState(0); // Active section percentage

    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const rect = aboutRef.current.getBoundingClientRect();
                const scrollY = window.scrollY;

                // Calculate position inside About section
                const sectionTop = rect.top + scrollY;
                const positionInSection = scrollY - sectionTop;

                setScrollPosition(positionInSection); // Update scroll position
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (aboutComponentHeight > 0) {
            // Calculate percentage scrolled
            const percentScrolled = Math.min(
                (scrollPosition / aboutComponentHeight) * 100,
                100
            );
            setCurrentSectionPercent(percentScrolled);
        }
    }, [scrollPosition, aboutComponentHeight]);

    console.log({
        aboutComponentHeight,
        scrollPosition,
        currentSectionPercent,
    });

    return (
        <div ref={aboutRef} className="min-h-[300vh] bg-black">
            {/* Sticky section */}
            <div className="sticky top-0 h-screen flex items-center justify-center text-white py-5 ">
                <div className=" bb w-full  h-full p-4 grid grid-cols-2 gap-4 ">
                    <div className=" bb flex flex-col items-start justify-center p-6 ">
                        <h1 className=" text-5xl font-bold ">What top <br /> entrepreneurs say <br /> about our work</h1>
                    </div>

                    <div className="bb">


                    </div>


                </div>

            </div>
        </div>
    );
};

export default AboutOurWork;
