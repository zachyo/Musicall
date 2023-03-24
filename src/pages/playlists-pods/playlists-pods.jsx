import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CARDS_DATA from "../../components/carousel/carousel.data";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import "../collections/collections.scss";

const PlaylistsAndPods = () => {
  const [option, setOptionn] = useState("mine");
  const { setOption } = useContext(NowPlayingContext);

  const navigate = useNavigate();
  const handleClick = (num, val) => {
    setOption(val);
    navigate(`/album/${num}`);
  };
  //fetch playlists data and populate here
  const playlists = CARDS_DATA.filter((song) => song.collection === option).map(
    (song, i) => {
      return (
        <div
          className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
          style={{ backgroundImage: `url(${song.img})` }}
          onClick={() => {
            handleClick(i, "playlist");
          }}
          key={i}
        >
          <h1 className="text-xl w-32 md:w-48 truncate">{song.title}</h1>
          <p className="text-[10px] opacity-80">John Watts</p>
        </div>
      );
    }
  );
  //fetch podcasts data and populate here
  const podcasts = CARDS_DATA.filter((song) => song.collection === "liked").map(
    (song, i) => {
      return (
        <div
          className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
          style={{ backgroundImage: `url(${song.img})` }}
          onClick={() => {
            handleClick(i, "podcast");
          }}
          key={i}
        >
          <h1 className="text-xl w-32 md:w-48 truncate">{song.title}</h1>
          <p className="text-[10px] opacity-80">John Watts</p>
        </div>
      );
    }
  );

  return (
    <div className="collections-page text-light mt-8 h-[110vh] w-[88vw]">
      <div className="artists mb-16">
        <h1 className="text-left text-xl md:text-3xl font-bold">
          Popular Playlists
        </h1>
        <div className="coll flex mt-7">{playlists}</div>
      </div>
      <div className="albums">
        <h1 className="text-left text-xl md:text-3xl font-bold">
          Trending Podcasts
        </h1>
        <div className="coll flex mt-7">{podcasts}</div>
      </div>
    </div>
  );
};

export default PlaylistsAndPods;
