import ladies from "../img/ladies-6-beige-1_396x.webp";

function Row() {
  return(
    <div className="row">
      <div className="item">
        <a href="#">
          <div className="img">
            <img src={ladies} width="270" />
          </div>
          <div className="product-desc">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
          </div>
        </a>
      </div>
      <div className="item">
        <a href="#">
          <div className="img">
            <img src={ladies} width="270" />
          </div>
          <div className="product-desc">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
          </div>
        </a>
      </div>
      <div className="item">
        <a href="#">
          <div className="img">
            <img src={ladies} width="270" />
          </div>
          <div className="product-desc">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
          </div>
        </a>
      </div>
      <div className="item">
        <a href="#">
          <div className="img">
            <img src={ladies} width="270" />
          </div>
          <div className="product-desc">
            <p>Seiko</p>
            <h4>Leather Pegged Pants</h4>
            <h5>from $119</h5>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Row;