import usePageMetrics from "../CustomHocks/usePageMetrics";
import AboutOurWork from "./Componets/AboutOurWork";
import Banner from "./Componets/Banner";
import SupportSec from "./Componets/SupportSec";



const Home = () => {
    const { homeRef } = usePageMetrics();

    return (
        <div id="home" ref={homeRef}>
            <Banner> </Banner> 
            <AboutOurWork></AboutOurWork>
            <SupportSec></SupportSec>

        </div>
    );
};

export default Home;