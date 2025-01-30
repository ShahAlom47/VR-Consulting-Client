import { useRef, useState } from "react";


const Commitment = () => {

    const sectionRef = useRef(null);
        const [currentScroll, setCurrentScroll] = useState(0);




    return (
        <div ref={sectionRef} className="relative bg-black min-h-[300vh] mx-auto overflow-hidden">
                   {/* Sticky Container for Fixed Content */}
                   <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
                       {/* Section 1: Mission Header */}
                       <div
                           className={`absolute w-full h-full flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${currentScroll < 0.31 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                       >
                           <h1 className="text-white text-[150px] font-medium">Mission</h1>
                       </div>
                   </div>
       
                   {/* Section 2: Content and Icon */}
                   <div className={`absolute w-full h-full bg-black transition-all duration-500 ${currentScroll >= 0.31 ? "opacity-100 z-40" : "opacity-0 z-0"}`}>
                   
                      
                           <div className="grid grid-cols-2 w-full min-h-[100vh]">
                               <div className="bg-black py-9 flex items-center justify-center"></div>
                               <div className="bg-stone-950 py-9 flex items-center justify-center">
                                   <p className="text-xl w-8/12 text-white">
                                       Every entrepreneur comes to the point where an average insurance advisor is no longer enough. At least not when it comes to important financial decisions and you need someone at your side to provide you with strategic support.
                                   </p>
                               </div>
                           </div>
       
                           
                       </div>
                   </div>
             
    );
};

export default Commitment;