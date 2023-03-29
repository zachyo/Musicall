import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CARDS_DATA from "../../components/carousel/carousel.data";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import { tracksData } from "../../utilities/tracksData";
import "../collections/collections.scss";

const ArtistsAndAlbums = () => {
  const { setOption } = useContext(NowPlayingContext);

  const navigate = useNavigate();
  const handleClick = (num, val) => {
    setOption(val);
    navigate(`/album/${num}`);
  };

  //fetching album data
  //   const { loading, error, data } = useFetch(
  //     `https://api.deezer.com/album/${newData.id}/tracks`
  //   );

  //fetch artists data and populate here
  const artists = tracksData.artists.data.map((artist, i) => {
    return (
      <div
        className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
        style={{ backgroundImage: `url(${artist.picture_medium})` }}
        onClick={() => {
          handleClick(i, "artist");
        }}
        key={i}
      >
        <h1 className="text-xl w-32 md:w-48 truncate">{artist.name}</h1>
      </div>
    );
  });
  //fetch albums data and populate here
  const albums = tracksData.albums.data.map((album, i) => {
    return (
      <div
        className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
        style={{ backgroundImage: `url(${album.cover_medium})` }}
        onClick={() => {
          handleClick(i, "album");
        }}
        key={i}
      >
        <h1 className="text-xl w-32 md:w-48 truncate">{album.title}</h1>
        <p className="text-[10px] opacity-80">{album.artist.name}</p>
      </div>
    );
  });

  return (
    <div className="collections-page text-light mt-8 h-[110vh] w-[88vw]">
      <div className="artists mb-16">
        <h1 className="text-left text-xl md:text-3xl font-bold">Top Artists</h1>
        <div className="coll flex mt-7">{artists}</div>
      </div>
      <div className="albums">
        <h1 className="text-left text-xl md:text-3xl font-bold">
          Trending Albums
        </h1>
        <div className="coll flex mt-7">{albums}</div>
      </div>
    </div>
  );
};

export default ArtistsAndAlbums;
