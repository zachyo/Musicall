import heart from '../../assets/icons/Heart.svg'
import './chart-card.scss';

const ChartCard = ({card}) => {
  const {title, artiste, time, img} = card
  return (
    <div className="chart-card animate-slideright">
      <div className="flex items-center">
        <div className="img">
          <img src={img} alt="cardImage" />
        </div>
        <div className="info">
          <h2 className="text-lg">{title}</h2>
          <p className="opacity-50 mt-1 mb-2">{artiste}</p>
          <p>{time}</p>
        </div>
      </div>

      <div className="fav">
        <img
          src={heart}
          alt="heart"
        />
      </div>
    </div>
  );
};

export default ChartCard;
