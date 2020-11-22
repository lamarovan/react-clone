import {Component}from 'react';
import slider1 from "../img/slider1.webp";
import slider2 from "../img/slider2.webp";
// import showSlides from "../main";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


class Slider extends Component{

  // showSlides();

  render() {
    return(
      <section className="slideshow-container" >      
        <div className="mySlides fade" >
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
    );
  }
}

// function Slider() {
//   // showSlides();
//   return(
//     <section className="slideshow-container">      
//       <div className="mySlides fade" >
//         <img className="img-slider" src={slider1}/>
//       </div>

//       <div className="mySlides fade">
//         <img className="img-slider" src={slider2} />
//       </div>

//       <div className="mySlides fade">
//         <img className="img-slider" src={slider1} /> 
//       </div>
//       <div>
//         <span className="dot" onclick="currentSlide(1)"></span>
//         <span className="dot" onclick="currentSlide(2)"></span>
//         <span className="dot" onclick="currentSlide(3)"></span>
//       </div>
//     </section>
//   );
// }

export default Slider;