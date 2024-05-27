import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage(){
    return(
        <div>
            <Header/>
            <Carousel numberOfSlide={1}/>
        </div>

    )

}
export default HomePage;