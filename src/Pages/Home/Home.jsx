import Accordition from "./Accordition";
import Bannar from "./Bannar";
import Review from "./Review";
import Section1 from "./Section1";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Section1></Section1>
            <Review></Review>
            <Accordition></Accordition>
        </div>
    );
};

export default Home;