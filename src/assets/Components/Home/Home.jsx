import Carousel from "../Carousel/Carousel";
import DifferentProducts from "../DifferentProducts/DifferentProducts";
import FAQ from "../FAQ/FAQ";
import Troubleshoot from "../Troubleshoot/Troubleshoot";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <DifferentProducts></DifferentProducts>
            <FAQ></FAQ>
            <Troubleshoot></Troubleshoot>
        </div>
    );
};

export default Home;