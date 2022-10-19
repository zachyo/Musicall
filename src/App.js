import './App.css';
import Homepage from './pages/homepage/homepage';

import {Route, Routes} from 'react-router-dom'
import Overview from './pages/overview/overview';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='' element={<Overview/>} >
          <Route path='/' element={<Homepage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
