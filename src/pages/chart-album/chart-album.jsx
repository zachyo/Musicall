import leadImage from "../../assets/images/Lead-image.png";
import heart from "../../assets/icons/Heart.svg";

import "./chart-album.scss";
import CARDS_DATA from "../../components/carousel/carousel.data";
import SongCard from "../../components/song-card/song-card";
import { useParams } from "react-router-dom";

const ChartAlbum = () => {
//   const location = useLocation(); //not necesarry
  const { id } = useParams();
//   console.log(location, id);
  let newData = CARDS_DATA
  if (id) {
    newData = CARDS_DATA.filter((each) => each.title === id);
  }
  const albumList = newData.map((song) => {
    return <SongCard song={song} key={song.id} />;
  });
  return (
    <div
      className="chart-album w-full"
      // style={{ backgroundImage: `url(${leadImage})` }}
    >
      <div className="album-header flex items-end">
        <img src={leadImage} alt="" />
        <div className="album-header_description text-sm text-light">
          <h1 className="text-4xl font-bold text-lighttblue mb-3">
            Tomorrow's tunes
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p>64 songs ~ 16 hrs+</p>
          <div className="action-buttons space-x-3 mt-10">
            <button>Play all</button>
            <button>Add to collection</button>
            <button>
              <img src={heart} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="album-list mt-12" style={{ width: "calc(86.8vw)" }}>
        {albumList}
      </div>
      {/* This is the album page */}
    </div>
  );
};

export default ChartAlbum;
