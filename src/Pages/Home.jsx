import usePageMetrics from "../CustomHocks/usePageMetrics";
import Banner from "./Componets/Banner";



const Home = () => {
    const { homeRef } = usePageMetrics();

    return (
        <div id="home" ref={homeRef}>
            <Banner> </Banner>
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