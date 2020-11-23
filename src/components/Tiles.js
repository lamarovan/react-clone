import banner1 from "../img/banner1.webp";
import banner2 from "../img/banner2.webp";
import banner3 from "../img/banner3.webp";

function Tiles() {
  return(
    <section className="tiles">
      <div className="col">
        <a href="javascript:void(0)" className="text-decoration-none">
          <div className="item">
            <div className="img">
              <img src={banner1} width="540" alt="" />
            </div>
            <div className="text">
              <h4>Glass Collection</h4>
              <p>Created using html</p>
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" className="text-decoration-none">
          <div className="item">
            <div className="img">
              <img src={banner2} width="540" alt="" />
            </div>
            <div className="text">
              <h4>Glass Collection</h4>
              <p>Created using html</p>
            </div>
          </div>
        </a>
      </div>
      <div className="col">
        <a href="javascript:void(0)" className="text-decoration-none">
          <div className="item">
            <div className="img">
              <img src={banner3} width="540" alt="" />
            </div>
            <div className="text">
              <h4>Glass Collection</h4>
              <p>Created using html</p>
            </div>
          </div>
        </a>
        <a href="javascript:void(0)" className="text-decoration-none">
          <div className="item">
            <div className="img">
              <img src={banner1} width="540" alt="" />
            </div>
            <div className="text">
              <h4>Glass Collection</h4>
              <p>Created using html</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Tiles;