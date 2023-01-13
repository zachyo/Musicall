import CARDS_DATA from "./carousel.data";

import "./carousel.scss";
import { useContext } from "react";
import SearchContext from "../../contexts/searchContext";
import { searchFilter } from "../../utilities/searchFilter";

const Carousel = () => {
  const {searchKey} = useContext(SearchContext)
  let newData = CARDS_DATA
  if (searchKey) {
    newData = searchFilter(searchKey, CARDS_DATA);
    console.log(searchKey, newData);
  }
  const songs = newData.map((each) => {
    return (
      <div className="releaseCard" key={each.id}>
        <img src={each.img} alt="" />
        <h2>{each.title}</h2>
      </div>
    );
  });
  

  return (
    <div className="carousel flex text-light text-left">
      {songs}
    </div>
  );
};

export default Carousel;
