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
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faPinterest} /></a>
          <a href="javascript:void(0)"><FontAwesomeIcon icon={faLinkedin} /></a>
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
        <a href="javascript:void(0)"><img src={logo} alt="" /></a>
      </div>
      <div className="list">
        <ul>
          <li className="dropdown">
            <a href="javascript:void(0)">Home page</a>
            <div className="dropdown-content">
              <a href="javascript:void(0)">Link 1</a>
              <a href="javascript:void(0)">Link 2</a>
              <a href="javascript:void(0)">Link 3</a>
            </div>
          </li>
          <li><a href="javascript:void(0)">Theme features</a></li>
          <li><a href="javascript:void(0)">Shop</a></li>
          <li><a href="javascript:void(0)">Men</a></li>
        </ul>
      </div>
      <div className="icons">
        <a href="javascript:void(0)"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="javascript:void(0)"><FontAwesomeIcon icon={faHeart} /></a>
        <a href="javascript:void(0)"><FontAwesomeIcon icon={faCartPlus} /></a>
      </div>
    </div>
    </header>
  )
}

export default Navbar;