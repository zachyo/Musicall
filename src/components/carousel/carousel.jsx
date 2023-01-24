import CARDS_DATA from "./carousel.data";

import "./carousel.scss";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import SearchContext from "../../contexts/searchContext";
import { searchFilter } from "../../utilities/searchFilter";
import NowPlayingContext from "../../contexts/nowPlayingContext";

const Carousel = ({songData}) => {
  const {searchKey} = useContext(SearchContext)
  const {handleClick} = useContext(NowPlayingContext)
  let newData = CARDS_DATA;
  if (searchKey) {
    newData = searchFilter(searchKey, CARDS_DATA);
    console.log(searchKey, newData);
  }
  const songs = newData.map((each) => {
    return (
      <Link to={each.type === 'album' ? `album/${each.title}` : ''} className="releaseCard" key={each.id} onClick={each.type === 'album' ? {} : ()=>handleClick(each)}>
        <img src={each.img} alt="" />
        <h2>{each.title}</h2>
      </Link>
    );
  });
  

  return (
    <div className="carousel flex text-light text-left">
      {songs}
    </div>
  );
};

export default Carousel;
