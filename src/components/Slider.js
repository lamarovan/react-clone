import slider1 from "../img/slider1.webp";

function Slider() {
  return(
    <section className="slideshow-container">
      <div className="mySlides fade">
        <img className="img-slider" src={slider1} />
      </div>

      <div className="mySlides fade">
        <img className="img-slider" src={slider1} />
      </div>

      <div className="mySlides fade">
        <img className="img-slider" src={slider1} /> 
      </div>
      {/* <!-- dot --> */}
      <div style="text-align:center">
        <span className="dot" onclick="currentSlide(1)"></span>
        <span className="dot" onclick="currentSlide(2)"></span>
        <span className="dot" onclick="currentSlide(3)"></span>
      </div>
    </section>
  )
}

export default Slider;