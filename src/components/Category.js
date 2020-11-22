import {faVenusDouble} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slider2 from "../img/slider2.webp";
import brand1 from "../img/brand1.png";
import brand2 from "../img/brand2.png";
import brand3 from "../img/brand3.png";
import Row from './Row';

function Category() {
  return(
    <section className="categories">

      <div className="category">
        <h2>
          <a href="#">
            <span className="icon"><FontAwesomeIcon icon={faVenusDouble} /></span>
            <span className="txt">Women</span>
          </a>
        </h2>
        <h2>
          <a href="#">
            <span className="icon"><FontAwesomeIcon icon={faVenusDouble} /></span>
            <span className="txt">Men</span>
          </a>
        </h2>
        <h2>
          <a href="#">
            <span className="icon"><FontAwesomeIcon icon={faVenusDouble} /></span>
            <span className="txt">Accessories</span>
          </a>
        </h2>
        <h2>
          <a href="#">
            <span className="icon"><FontAwesomeIcon icon={faVenusDouble} /></span>
            <span className="txt">Sale</span>
          </a>
        </h2>
      </div>

      <div className="products">
        <Row />
        <Row />
      </div>

      <div className="banner">
        <img className="img-banner" src={slider2} />
      </div>
    
      <div className="brands">
        <img className="brand-logo" src={brand1} />
        <img className="brand-logo" src={brand2} />
        <img className="brand-logo" src={brand3} />
        <img className="brand-logo" src={brand1} />
        <img className="brand-logo" src={brand2} />
        <img className="brand-logo" src={brand3} />
      </div>

      <div className="sale">
        <h3>Sale Today</h3>
        <p>Hurry up! Time is running out!</p>
      </div>

      <Row />

    </section>

  )
}

export default Category;