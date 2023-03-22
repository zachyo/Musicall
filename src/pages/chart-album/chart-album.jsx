import leadImage from "../../assets/images/Lead-image.png";
import heart from "../../assets/icons/Heart.svg";
import heartRed from "../../assets/icons/Heart-red.svg";
import play from "../../assets/icons/Play.svg";
import music from "../../assets/icons/music-square-add.svg";

import "./chart-album.scss";
import CARDS_DATA from "../../components/carousel/carousel.data";
import SongCard from "../../components/song-card/song-card";
import { useParams } from "react-router-dom";
import { tracksData } from "../../utilities/tracksData";
import useFetch from "../../utilities/useFetch";
import { useContext, useState } from "react";
import { getTime, totalTime } from "../../utilities/utils";
import NowPlayingContext from "../../contexts/nowPlayingContext";

const ChartAlbum = () => {
  //   const location = useLocation(); //not necesarry
  let fullDuration = ''
  const { handleNowPlaying } = useContext(NowPlayingContext);

  const { id } = useParams();
  console.log(id);
  // let newData = CARDS_DATA
  let newData = tracksData.albums.data[id];
  console.log(newData, newData.id);

  //fetching album data
  const { loading, error, data } = useFetch(
    `https://api.deezer.com/album/${newData.id}/tracks`
  );
  const albumListData = data?.data;

  //duration of album
  if ( albumListData) {
    fullDuration = getTime(totalTime(albumListData))
  }
  
  //albumTracks
  const albumList = albumListData?.map((song, i) => {
    return (
      <SongCard
        song={song}
        key={song.id}
        img={newData.cover}
        title={newData.title}
        handleSong={()=>handleNowPlaying(song,i)}
      />
    );
  });
  console.log(data);
  return (
    <div
      className="chart-album w-full"
      // style={{ backgroundImage: `url(${leadImage})` }}
    >
      <div className="album-header flex flex-col items-start pl-4 mt-12 md:p-0 md:ml-0 md:flex-row md:items-end">
        <img src={newData.cover_medium} alt="" className="ml-3 mb-4 rounded-[2.1rem] md:m-0 md:ml-5"/>
        <div className=" album-header_description text-left  text-sm text-light w-auto mt-4 mr-3 md:m-0 md:px-8 md:w-[550px]">
          <h1 className="text-4xl font-bold text-lighttblue mb-3">
            {newData.title}
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
          <p className="text-sandy font-bold mb-2">{newData.artist.name}</p>
          <p>
            {data?.total} songs ~ {fullDuration}
          </p>

          <div className="action-buttons flex space-x-3 mt-10">
            <button className="text-[12px] p-3 flex items-center md:px-3 md:py-4"><img src={play} alt="play"  className="mr-3"/> Play all</button>
            <button className="text-[12px] p-3 flex items-center md:px-3 md:py-4"><img src={music} alt="music"  className="mr-3"/> Add to collection</button>
            <button className="text-[12px] p-3 md:px-3 md:py-4">
              <img src={heartRed} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="album-list mt-12 px-4 md:p-0 md:w-[86.8vw]">
        {albumList}
      </div>
      {/* This is the album page */}
    </div>
  );
};

export default ChartAlbum;
