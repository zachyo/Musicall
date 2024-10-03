import CARDS_DATA from "./carousel.data";

import "./carousel.scss";
import { useContext } from "react";
import SearchContext from "../../contexts/searchContext";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import { searchFilter } from "../../utilities/searchFilter";
import useMusicallStore from "../../store/musicallStore";

const Carousel = ({ songData }) => {
  const { searchKey } = useContext(SearchContext);
  const { handleNowPlaying } = useContext(NowPlayingContext);
  let newData = songData;
  if (searchKey) {
    newData = searchFilter(searchKey, CARDS_DATA);
    // console.log(searchKey, newData);
  }
  const setCurrentTracklist = useMusicallStore(
    (state) => state.setCurrentTracklist
  );
  const songs = newData?.map((each, i) => {
    return (
      <div
        className="releaseCard animate-slideup"
        key={each.id}
        onClick={() => {
          setCurrentTracklist(songData)
          handleNowPlaying(each, i);
        }}
      >
        <img src={each.album.cover} alt='' />
        <h2 className="truncate">{each.title}</h2>
        <p className="max-w-[140px] whitespace-normal">{each?.artist?.name}</p>
      </div>
    );
  });
  // to={each.type === 'album' ? `album/${each.title}` : null}

  return (
    <div className="carousel flex text-light text-left gap-5">{songs}</div>
  );
};

export default Carousel;
