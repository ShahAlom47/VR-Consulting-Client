import usePageMetrics from "../CustomHocks/usePageMetrics";
import AboutOurWork from "./Componets/AboutOurWork";
import Banner from "./Componets/Banner";
import CollaborationSec from "./Componets/CollaborationSec";
import Commitment from "./Componets/Commitment";
import MissionSec from "./Componets/MissonSec";
import SupportSec from "./Componets/SupportSec";



const Home = () => {
    const { homeRef } = usePageMetrics();

    return (
        <div id="home" ref={homeRef}>
            <Banner> </Banner> 
            <AboutOurWork></AboutOurWork>
            <SupportSec></SupportSec>
            <MissionSec></MissionSec>
            <CollaborationSec></CollaborationSec>
            {/* <Commitment></Commitment> */}

         

        </div>
    );
};

export default Home;