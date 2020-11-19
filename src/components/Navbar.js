import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/logo.png";

function Navbar() {
  return(
    <header>
      <div className="hdr-top">
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="light-text">
          this is the black part
        </div>
        <div className="sm-text">
          <ul>
            <li>Services</li>
            <li>English</li>
            <li>USD</li>
            <li>Log in</li>
          </ul>
        </div>
      </div>

      <div className="hdr">
      <div className="logo">
        <a href="#"><img src={logo} /></a>
      </div>
      <div className="list">
        <ul>
          <li className="dropdown">
            <a href="#">Home page</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li><a href="#">Theme features</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Men</a></li>
        </ul>
      </div>
      <div className="icons">
        <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
        <a href="#"><FontAwesomeIcon icon={faCartPlus} /></a>
      </div>
    </div>
    </header>
  )
}

export default Navbar;