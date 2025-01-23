import usePageMetrics from "../CustomHocks/usePageMetrics";
import AboutOurWork from "./Componets/AboutOurWork";
import Banner from "./Componets/Banner";



const Home = () => {
    const { homeRef } = usePageMetrics();

    return (
        <div id="home" ref={homeRef}>
            <Banner> </Banner> 
            <AboutOurWork></AboutOurWork>
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