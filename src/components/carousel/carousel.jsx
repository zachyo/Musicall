import CARDS_DATA from "./carousel.data";

import "./carousel.scss";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import SearchContext from "../../contexts/searchContext";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import { searchFilter } from "../../utilities/searchFilter";

const Carousel = ({songData}) => {
  const {searchKey} = useContext(SearchContext)
  const { handleNowPlaying } = useContext(NowPlayingContext);
  let newData = songData;
  if (searchKey) {
    newData = searchFilter(searchKey, CARDS_DATA);
    console.log(searchKey, newData);
  }
  const songs = newData?.map((each,i) => {
    return (
      <div
        className="releaseCard"
        key={each.id}
        onClick={()=>handleNowPlaying(each,i)}
      >
        <img src={each.album.cover} alt="songCover" />
        <h2 className="truncate">{each.title}</h2>
        <p className="">{each?.artist?.name}</p>
      </div>
    );
  });
  // to={each.type === 'album' ? `album/${each.title}` : null}

  return (
    <div className="carousel flex text-light text-left">
      {songs}
    </div>
  );
};

export default Carousel;
