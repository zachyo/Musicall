import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const musicallStore = (set) => ({
  currentTracklist: [],
  albumId: 0,
  albumOption: "album",
  userLoggedIn: false,
  userPath: "signin",
  showNav : 'hidden',
  setCurrentTracklist: (tracklist) => {
    set((state) => ({
      currentTracklist: tracklist,
    }));
  },
  setAlbumId: (id) => {
    set((state) => ({
      albumId: id,
    }));
  },
  setUserLoggedIn: (bool) => {
    set((state) => ({
      userLoggedIn: bool,
      userPath: bool ? "profile" : "signin",
    }));
  },
  setAlbumOption: (option) => {
    set((state) => ({
      albumOption: option,
    }));
  },
  setShowNav : (val) => {
    set((state)=> ({
      showNav : val
    }))
  }
});

const useMusicallStore = create(
  devtools(
    persist(musicallStore, {
      name: "musicallStore",
      /*
      storage: createJSONStorage(() => sessionStorage), 
      (optional) by default, 'localStorage' is used
      */
    })
  )
);

export default useMusicallStore;
