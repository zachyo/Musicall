import './App.css';
import Homepage from './pages/homepage/homepage';

import {Route, Routes} from 'react-router-dom'
import Overview from './pages/overview/overview';
import ChartAlbum from './pages/chart-album/chart-album';

import leadImage from './assets/images/Lead-image.png'
import Collections from './pages/collections/collections';
import LoggedIn from './pages/login/loggedIn';
import Select from './pages/login/select';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Overview chartB={leadImage} />}>
          <Route path="/" element={<Homepage />} />
          <Route path=":id/album" element={<ChartAlbum />}>
            {/* <Route path=":id" element={<Collections />} /> */}
          </Route>
          <Route path="collections" element={<Collections />} />
          <Route path="signin" element={<Select/>} />
          <Route path="loggedin" element={<LoggedIn/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
