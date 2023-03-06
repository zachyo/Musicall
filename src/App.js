import './App.css';
import Homepage from './pages/homepage/homepage';

import {Route, Routes} from 'react-router-dom'
import Overview from './pages/overview/overview';
import ChartAlbum from './pages/chart-album/chart-album';

import leadImage from './assets/images/Lead-image.png'
import Collections from './pages/collections/collections';
import SignUp from './pages/login/logup.component';
import LoggedIn from './pages/login/loggedIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Overview chartB={leadImage} />}>
          <Route path="/" element={<Homepage />} />
          <Route path="album" element={<ChartAlbum />}>
            <Route path=":id" element={<Collections />} />
          </Route>
          <Route path="collections" element={<Collections />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="loggedin" element={<LoggedIn/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
