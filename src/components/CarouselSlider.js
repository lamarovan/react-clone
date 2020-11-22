import slider1 from "../img/slider1.webp";
import slider2 from "../img/slider2.webp";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";

function CarouselSlider() {
  return(
    <Carousel>
      <Carousel.Item>
        <div>
          <img className="d-block w-100" src={slider1} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img className="d-block w-100" src={slider2} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
          <img className="d-block w-100" src={slider1} />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselSlider;