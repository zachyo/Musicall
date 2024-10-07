import './App.css';
import Homepage from './pages/homepage/homepage';

import {Route, Routes} from 'react-router-dom'
import Overview from './pages/overview/overview';
import ChartAlbum from './pages/chart-album/chart-album';

import leadImage from './assets/images/Lead-image.png'
import Collections from './pages/collections/collections';
import LoggedIn from './pages/login/loggedIn';
import Select from './pages/login/select';
import ArtistsAndAlbums from './pages/arstist-albums/artists-albums';
import PlaylistsAndPods from './pages/playlists-pods/playlists-pods';
import { VerifyMail } from './pages/verify-mail/verify-mail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Overview chartB={leadImage} />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="album/:id" element={<ChartAlbum />}>
            {/* <Route path=":id" element={<Collections />} /> */}
          </Route>
          <Route path="artists" element={<ArtistsAndAlbums />} />
          <Route path="playlists" element={<PlaylistsAndPods />} />
          <Route path="profile" element={<Collections />} />
          <Route path="signin" element={<Select />} />
          <Route path="loggedin" element={<LoggedIn />} />
        </Route>
        <Route path="/verify_email" element={<VerifyMail/>} />
      </Routes>
    </div>
  );
}

export default App;
