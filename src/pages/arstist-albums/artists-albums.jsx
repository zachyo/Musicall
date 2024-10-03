import { useNavigate } from "react-router-dom";
import useMusicallStore from "../../store/musicallStore";
import { tracksData } from "../../utilities/tracksData";
import "../collections/collections.scss";

const ArtistsAndAlbums = () => {
  const setOption = useMusicallStore((state) => state.setAlbumOption);

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
        className="badge cursor-pointer flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left"
        style={{ backgroundImage: `url(${artist.picture_medium})` }}
        onClick={() => {
          handleClick(i, "artist");
        }}
        key={i}
      >
        <h1 className="text-base lg:text-xl w-32 md:w-48 truncate font-medium">{artist.name}</h1>
      </div>
    );
  });
  //fetch albums data and populate here
  const albums = tracksData.albums.data.map((album, i) => {
    return (
      <div
        className="badge cursor-pointer flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
        style={{ backgroundImage: `url(${album.cover_medium})` }}
        onClick={() => {
          handleClick(i, "album");
        }}
        key={i}
      >
        <h1 className="text-xl w-32 md:w-48 truncate font-medium">{album.title}</h1>
        <p className="text-[10px] opacity-80">{album.artist.name}</p>
      </div>
    );
  });

  return (
    <div className="collections-page text-light mt-8 mb-10 w-[99vw] px-4 md:p-0 md:w-[88vw]">
      <div className="artists mb-16">
        <h1 className="text-left text-xl md:text-3xl font-bold">Top Artists</h1>
        <div className="coll flex mt-7 gap-5">{artists}</div>
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
