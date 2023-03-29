import heartRed from "../../assets/icons/Heart-red.svg";
import play from "../../assets/icons/Play.svg";
import music from "../../assets/icons/music-square-add.svg";

import "./chart-album.scss";
import SongCard from "../../components/song-card/song-card";
import { useParams } from "react-router-dom";
import { tracksData } from "../../utilities/tracksData";
import useFetch from "../../utilities/useFetch";
import { useContext, useEffect, useState } from "react";
import { getTime, totalTime } from "../../utilities/utils";
import NowPlayingContext from "../../contexts/nowPlayingContext";
import Spinner from "../../components/spinner/spinner.component";

const ChartAlbum = () => {
  //   const location = useLocation(); //not necesarry
  let fullDuration = "";
  let fetchLink = "";
  const { option, handleNowPlaying } = useContext(NowPlayingContext);

  const { id } = useParams();

  let newData;
  if (option === "album") {
    newData = tracksData.albums.data[id];
  } else if (option === "artist") {
    newData = tracksData.artists.data[id];
  } else if (option === "playlist") {
    newData = tracksData.playlists.data[id];
  } else newData = tracksData.podcasts.data[id];

  if (option === "album") {
    fetchLink = `https://api.deezer.com/${option}/${newData.id}/tracks`;
  } else if (option === "artist") {
    fetchLink = `https://api.deezer.com/${option}/${newData.id}/top?limit=20`;
  } else fetchLink = `https://api.deezer.com/${option}/${newData.id}/tracks/?limit=20`;

  //fetching album data
  const { loading, error, data } = useFetch(fetchLink);
  const albumListData = data?.data;

  //duration of album
  if (albumListData) {
    fullDuration = getTime(totalTime(albumListData));
  }

  const handlePlayAll = () => {
    //sets the global player tracks zustand value to the loaded tracklist
    //then plays the tracklist from the top using handleNowPlaying(albumListData[0], 0)
  };

  //albumTracks
  const albumList = albumListData?.map((song, i) => {
    return (
      <SongCard
        song={song}
        key={song.id}
        //each.album.cover for image
        img={option !== "album" ? song?.album?.cover : newData.cover}
        title={newData.title}
        handleSong={() => handleNowPlaying(song, i)}
      />
    );
  });

  useEffect(() => {
    /*
  the data will be stored in zustand
  set data of the album to player control as normal album tracklist
  */
  });
  return (
    <div
      className="chart-album w-full"
      // style={{ backgroundImage: `url(${leadImage})` }}
    >
      <div className="album-header flex flex-col items-start pl-4 mt-12 md:p-0 md:ml-0 md:flex-row md:items-end">
        <img
          src={
            option === "album" ? newData.cover_medium : newData.picture_medium
          }
          alt="album_picture"
          className="ml-3 mb-4 rounded-[2.1rem] md:m-0 md:ml-5"
        />
        <div className=" album-header_description text-left  text-sm text-light w-auto mt-4 mr-3 md:m-0 md:px-8 md:w-[550px]">
          <h1 className="text-4xl font-bold text-lighttblue mb-3">
            {option === "artist" ? newData.name : newData.title}
          </h1>
          <p className="mb-3">
            {newData?.description || (
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </>
            )}
          </p>
          <p className="text-sandy font-bold mb-2">
            {option === "album" ? newData.artist.name : ""}
          </p>
          <p>
            {/* {option === "artist" ? 20 : data?.total} */}
            {albumList?.length}
            {option !== "podcast" && <> songs ~</>} {fullDuration}
          </p>

          <div className="action-buttons flex space-x-3 mt-10">
            <button
              className="text-[12px] p-3 flex items-center md:px-3 md:py-4"
              onClick={handlePlayAll}
            >
              <img src={play} alt="play" className="mr-3" /> Play all
            </button>
            <button className="text-[12px] p-3 flex items-center md:px-3 md:py-4">
              <img src={music} alt="music" className="mr-3" /> Add to collection
            </button>
            <button className="text-[12px] p-3 md:px-3 md:py-4">
              <img src={heartRed} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="album-list mt-12 px-4 md:p-0 md:w-[86.8vw]">
        {loading ? <Spinner /> : albumList}
      </div>
      {/* This is the album page */}
    </div>
  );
};

export default ChartAlbum;
