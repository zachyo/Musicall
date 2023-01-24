import { useState } from "react";
import CARDS_DATA from "../../components/carousel/carousel.data";
import "./collections.scss";

const Collections = () => {
  const [option, setOption] = useState("mine");

  const myCollection = CARDS_DATA.filter(
    (song) => song.collection === option
  ).map((song) => {
    return (
      <div className="badge" style={{ backgroundImage: `url(${song.img})` }}>
        <h1 style={{fontSize: '21px'}}>{song.title}</h1>
        <p>John Watts</p>
      </div>
    );
  });

  return (
    <div className="collections-page text-light">
      <div className="collections-nav text-left">
        <button
          className={option === "mine" ? "active" : ""}
          onClick={() => {
            setOption("mine");
          }}
        >
          My Collection
        </button>
        <button
          className={option === "liked" ? "active" : ""}
          onClick={() => {
            setOption("liked");
          }}
        >
          Liked
        </button>{" "}
      </div>

      <div className="flex mt-7">{myCollection}</div>
    </div>
  );
};

export default Collections;
