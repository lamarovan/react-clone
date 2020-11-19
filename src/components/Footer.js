import { faTruck, faTrophy, faCertificate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer>
      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faTruck} className="icon" />
          <div className="content">
            <h4>Fast Shipping</h4>
            <p>Free delivery available on all USA orders, $20 minimum spend</p>
          </div>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
          <div className="content">
            <h4>High quality product</h4>
            <p>To beat your competition, make good quality your mission.</p>
          </div>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faCertificate} className="icon" />
          <div className="content">
            <h4>Best price</h4>
            <p>A price match guarantee for best prices on all our products</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <img src={logo} />
          <ul>
            <li>E-mail: Foxshop@gmail.com</li>
            <li>Hours: 10:00 - 18:00, Mon - Fri</li>
            <li>Video Presentation</li>
            <li>Online Support</li>
            <li>Online Doc</li>
          </ul>
        </div>

        <div className="container">
          <h3>Shop Info</h3>
          <br />
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Delivery and Return</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="container">
          <h3>About Us</h3>
          <br />
          <p>FOXic - worldwide fashion store with wide collection of styles with over 100 international fashion brands.</p>
          <p>Shop designer clothes, shoes, bags & accessories for Men & Women</p>
        </div>
      </div>

      <div className="bottom">
        <p>FOXic &copy; 2020 copyright</p>
      </div>
    </footer>
  )
}

export default Footer;