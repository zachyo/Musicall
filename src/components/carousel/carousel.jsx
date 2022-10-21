// import CARDS_DATA from "./carousel.data";
import R14 from '../../assets/images/Rectangle 14.png'
import R15 from '../../assets/images/Rectangle 15.png'
import R16 from '../../assets/images/Rectangle 16.png'
import R17 from '../../assets/images/Rectangle 17.png'
import R18 from '../../assets/images/Rectangle 18.png'
import R19 from '../../assets/images/Rectangle 19.png'
import R20 from '../../assets/images/Rectangle 20.png'
import R21 from "../../assets/images/Rectangle 21.png";
import './carousel.scss'

const Carousel = () => {

    return (
      <div className="carousel flex text-light text-left">
        <div className="releaseCard">
          <img src={R14} alt="" />
          <h2>Life in a circle</h2>
        </div>
        <div className="releaseCard">
          <img src={R15} alt="" />
          <h2>Mountain</h2>
        </div>
        <div className="releaseCard">
          <img src={R16} alt="" />
          <h2>Limits</h2>
        </div>
        <div className="releaseCard">
          <img src={R17} alt="" />
          <h2>Everything's Black</h2>
        </div>
        <div className="releaseCard">
          <img src={R19} alt="" />
          <h2>Cancelled</h2>
        </div>
        <div className="releaseCard">
          <img src={R20} alt="" />
          <h2>Named</h2>
        </div>
        <div className="releaseCard">
          <img src={R18} alt="" />
          <h2>Blind Eyes</h2>
        </div>
        <div className="releaseCard">
          <img src={R21} alt="" />
          <h2>Seasons In</h2>
        </div>
        <div className="releaseCard">
          <img src={R14} alt="" />
          <h2>Life in a circle</h2>
        </div>
        <div className="releaseCard">
          <img src={R15} alt="" />
          <h2>Mountain</h2>
        </div>
        <div className="releaseCard">
          <img src={R16} alt="" />
          <h2>Limits</h2>
        </div>
      </div>
    );
}
 
export default Carousel;