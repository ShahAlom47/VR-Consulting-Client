import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GiChessKnight, GiChessRook } from "react-icons/gi";
import { SiChessdotcom } from "react-icons/si";

const CollaborationSec = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const sectionRef = useRef(null);

    console.log(scrollPercent);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollPosition = window.scrollY - sectionTop;
                const percentage = Math.min(Math.max((scrollPosition / sectionHeight) * 120, -100), 100);
                setScrollPercent(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="bg-black py-20 relative min-h-[500px]">


            <div className="relative flex justify-center items-center min-h-[100px]">
                {/* 1st Icon: Always Visible */}
                <motion.div
                    initial={{ opacity: 1 }}
                    className="absolute bottom-0 z-40"
                >
                    <SiChessdotcom  GiChessRook className="text-white text-6xl z-40 " />
                </motion.div>

                {/* 2nd Icon: Appears on Scroll & Moves */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: scrollPercent > -30 ? 1 : 0, // Appears after 10% scroll
                        x: scrollPercent + 40 / 2, // Moves based on percentage
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 right-[47%]"
                >
                    <GiChessKnight className=" text-6xl text-gray-700 z-20  " />
                </motion.div>

                {/* 3rd Icon: Appears & Moves More on Scroll */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: scrollPercent > -40 ? 1 : 0, // Appears after 20% scroll
                        x: scrollPercent +90 / 9, // Moves more than the 2nd icon
                    }}
                    transition={{ duration: 0.9 }}
                    className="absolute bottom-0 right-[47%]"
                >
                    <GiChessRook className=" text-5xl text-gray-400 z-10" />
                </motion.div>
            </div>
            <div className="text-white text-3xl text-center mb-4">
                <h1>This is how our collaboration works</h1>
            </div>
            <div className="min-h-screen"></div>
        </div>
    );
};

export default CollaborationSec;
