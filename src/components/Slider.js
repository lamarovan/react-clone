// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
import slideshow from '../main';
import slider1 from "../img/slider1.webp";
import slider2 from "../img/slider2.webp";

function Slider() {

  slideshow();

  return(
    <section className="slideshow-container">      
      <div className="mySlides fade" style={{display: "block"}}>
        <img className="img-slider" src={slider1} />
      </div>

      <div className="mySlides fade">
        <img className="img-slider" src={slider2} />
      </div>

      <div className="mySlides fade">
        <img className="img-slider" src={slider1} /> 
      </div>
      <div>
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </section>
  )
}

export default Slider;