import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home.js'
import Announcements from './Announcements.js';
import Achievements from './Achievements.js';
import Competitions from './Competitions.js';
import Asana from './Asana-Page.js'
import AsanaInfo from './Asana-info.js';
import AboutUs from './AboutUs.js';
import Admin from './Admin.js';
import Dashboard from './Dashboard.js';
import AddAsana from './Add_asana.js';


function App() {
  return(
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/competitions' element={<Competitions />} />
          <Route path='/asana' element={<Asana />} />
          <Route path='/asana/:asanaId' element={<AsanaInfo />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add_asana' element={<AddAsana />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
