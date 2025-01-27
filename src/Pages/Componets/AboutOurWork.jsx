import { useEffect, useState } from "react";
import usePageMetrics from "../../CustomHocks/usePageMetrics";
import main from "../../Accets/Images/main-img.png";

const AboutOurWork = () => {
    const { aboutRef, aboutComponentHeight } = usePageMetrics();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentSectionPercent, setCurrentSectionPercent] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // console.log(currentSectionPercent);

    const contents = [
        {
            name: "Shah Alom",
            designation: "Front-End Developer",
            description:
                "A passionate front-end developer skilled in React.js, Tailwind CSS, and JavaScript. I specialize in creating responsive and user-friendly web applications.",
            photo: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=1470",
        },
        {
            name: "Aisha Ahmed",
            designation: "UI/UX Designer",
            description:
                "Creative and detail-oriented UI/UX designer with expertise in crafting user-centric designs.",
            photo: "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=1470",
        },
        {
            name: "Rahul Khan",
            designation: "Full-Stack Developer",
            description:
                "Experienced full-stack developer with expertise in Node.js, MongoDB, and React.js.",
            photo: "https://plus.unsplash.com/premium_photo-1693000696650-e73643956033?q=80&w=1471",
        },
    ];

    // Update scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (aboutRef.current) {
                const rect = aboutRef.current.getBoundingClientRect();
                const scrollY = window.scrollY;

                const sectionTop = rect.top + scrollY;
                const positionInSection = scrollY - sectionTop;

                setScrollPosition(positionInSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle content fade and update rotation
    useEffect(() => {
        if (aboutComponentHeight > 0) {
            const percentScrolled = Math.min(
                (scrollPosition / aboutComponentHeight) * 100,
                100
            );
            setCurrentSectionPercent(percentScrolled);

            let newContentIndex = 0;
            if (percentScrolled <= 33) {
                newContentIndex = 0;
            } else if (percentScrolled <= 66) {
                newContentIndex = 1;
            } else {
                newContentIndex = 2;
            }

            if (newContentIndex !== currentContentIndex) {
                setIsFading(true);
                setTimeout(() => {
                    setCurrentContentIndex(newContentIndex);
                    setIsFading(false);
                }, 500);
            }
        }
    }, [scrollPosition, aboutComponentHeight, currentContentIndex]);

    const calculateRotation = () => {
        const angle = (scrollPosition / 10) % 360;
        return `rotate(${angle}deg)`;
    };

    return (
        <div ref={aboutRef} className="min-h-[300vh] bg-stone-900">
            <div className="sticky top-0 h-screen flex items-center justify-center text-white py-5">
                <div className="relative w-full h-full p-4 grid grid-cols-6 gap-4">
                    {/* Left Content */}
                    <div className="flex flex-col items-start justify-center p-6 col-span-2 col-start-2">
                        <h1 className="text-5xl font-bold space-y-4">
                            What top <br /> entrepreneurs say <br /> about our work
                        </h1>
                        <div
                            className={`mt-6 transition-opacity duration-1000 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            <p className="text-lg text-gray-400 mb-4">
                                {contents[currentContentIndex].description}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={contents[currentContentIndex].photo}
                                    alt={contents[currentContentIndex].name}
                                    className="w-16 h-16 rounded-lg"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {contents[currentContentIndex].name}
                                    </h2>
                                    <p className="text-sm text-gray-400">
                                        {contents[currentContentIndex].designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rotating Main Image */}
                    <div
                        className="col-span-3 flex items-center justify-center relative overflow-hidden bb"
                   
                    >
                        <div className=" rounded-full  p-3 absolute   inset-0   w-[1600px] h-[1700px]"
                         style={{
                            transform: calculateRotation(),
                            // backgroundImage: `url(${main})`,
                            backgroundSize: "cover",
                        }}>
                            <img  className="w-[200%] h-full  absolute  -rotate  rounded-full" src={main} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutOurWork;
