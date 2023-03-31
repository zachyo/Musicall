import { useNavigate } from "react-router-dom";
import useMusicallStore from "../../store/musicallStore";
import { tracksData } from "../../utilities/tracksData";
import "../collections/collections.scss";

const PlaylistsAndPods = () => {
  const setOption = useMusicallStore((state) => state.setAlbumOption);

  const navigate = useNavigate();
  const handleClick = (num, val) => {
    setOption(val);
    navigate(`/album/${num}`);
  };
  //fetch playlists data and populate here
  const playlists = tracksData.playlists.data.map((playlist, i) => {
    return (
      <div
        className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
        style={{ backgroundImage: `url(${playlist.picture_medium})` }}
        onClick={() => {
          handleClick(i, "playlist");
        }}
        key={i}
      >
        <h1 className="text-xl w-32 md:w-48 truncate">{playlist.title}</h1>
        <p className="text-[10px] opacity-80">{playlist.user.name}</p>
      </div>
    );
  });
  //fetch podcasts data and populate here
  const podcasts = tracksData.podcasts.data.map((podcast, i) => {
    return (
      <div
        className="badge flex flex-col justify-end rounded-[20px] h-[137px] md:h-[214px] bg-cover pl-3 pb-4 md:pl-5 md:pb-5 text-sm text-left mr-5"
        style={{ backgroundImage: `url(${podcast.picture})` }}
        onClick={() => {
          handleClick(i, "podcast");
        }}
        key={i}
      >
        <h1 className="text-xl w-32 md:w-48 truncate">{podcast.title}</h1>
        {/* <p className="text-[10px] opacity-80">John Watts</p> */}
      </div>
    );
  });

  return (
    <div className="collections-page text-light mt-8 h-[110vh] w-[99vw] px-4 md:p-0 md:w-[88vw]">
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
