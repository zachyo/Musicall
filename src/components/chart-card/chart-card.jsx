import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import heart from '../../assets/icons/Heart.svg'
import NowPlayingContext from '../../contexts/nowPlayingContext';
import './chart-card.scss';

const ChartCard = ({card, num}) => {
  const { setOption } = useContext(NowPlayingContext);
  const {title, artist, cover,id} = card
  const navigate = useNavigate();
  const handleClick = () => {
    setOption('album')
    navigate(`/album/${num}`)
  }
  return (
    <div className="chart-card animate-slideright p-4 md:items-center md:p-4 md:w-[32.6vw]">
      <div
        className="flex flex-col w-4/5 justify-between md:justify-start md:flex-row md:items-center hover:cursor-pointer"
        onClick={handleClick}
      >
        <div className="img md:mr-8">
          <img src={cover} alt="cardImage" />
        </div>
        <div className="info w-[190px] md:w-auto">
          <h2 className="text-lg">{title}</h2>
          <p className="opacity-50 mt-1 mb-6 md:mb-2">{artist.name}</p>
          <p className="text-[14px]">5mins</p>
        </div>
      </div>

      <div className="fav mt-3 md:m-0">
        <img src={heart} alt="heart" />
      </div>
    </div>
  );
};

export default ChartCard;
