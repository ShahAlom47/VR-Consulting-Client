import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GiChessKnight, GiChessRook } from "react-icons/gi";
import { SiChessdotcom } from "react-icons/si";

const CollaborationSec = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollPosition = window.scrollY - sectionTop;
                const percentage = Math.min(Math.max((scrollPosition / sectionHeight) * 100, 0), 100);
                setScrollPercent(percentage);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="bg-black py-20 relative min-h-[500px]">
            <div className="text-white text-3xl text-center mb-4">
                <h1>This is how our collaboration works</h1>
            </div>

            <div className="relative flex justify-center items-center min-h-[200px]">
                {/* 1st Icon: Always Visible */}
                <motion.div
                    initial={{ opacity: 1 }}
                    className="absolute top-0"
                >
                    <GiChessKnight className="text-white text-6xl" />
                </motion.div>

                {/* 2nd Icon: Appears on Scroll & Moves */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: scrollPercent > 1 ? 1 : 0, // Appears after 10% scroll
                        y: scrollPercent * 2, // Moves based on percentage
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 right-20"
                >
                    <GiChessRook className="text-white text-6xl opacity-85" />
                </motion.div>

                {/* 3rd Icon: Appears & Moves More on Scroll */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: scrollPercent > 4 ? 1 : 0, // Appears after 20% scroll
                        y: scrollPercent * 3, // Moves more than the 2nd icon
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 right-14"
                >
                    <SiChessdotcom className="text-white text-6xl opacity-45" />
                </motion.div>
            </div>
            <div className="min-h-screen"></div>
        </div>
    );
};

export default CollaborationSec;
