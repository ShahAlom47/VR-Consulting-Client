import usePageMetrics from "../CustomHocks/usePageMetrics";



const Home = () => {
    const {homeRef} = usePageMetrics();
    
    return (
        <div id="home" ref={homeRef}>
             <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
        <div className="min-h-screen bb mb-3"></div>
            
        </div>
    );
};

export default Home;