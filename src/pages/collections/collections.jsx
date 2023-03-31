import { useState } from "react";
import CARDS_DATA from "../../components/carousel/carousel.data";
import "./collections.scss";

const Collections = () => {
  const [option, setOption] = useState("mine");

  const myCollection = CARDS_DATA.filter(
    (song) => song.collection === option
  ).map((song) => {
    return (
      <div className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5" style={{ backgroundImage: `url(${song.img})` }}>
        <h1 className='text-xl w-32 md:w-48 truncate'>{song.title}</h1>
        <p className="text-[10px] opacity-80">John Watts</p>
      </div>
    );
  });

  return (
    <div className="collections-page text-light h-[88vh] w-[99vw] px-4 md:p-0 md:w-[88vw]">
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

      <div className="coll flex mt-7">{myCollection}</div>
    </div>
  );
};

export default Collections;
