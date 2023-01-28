import React, {useState, createContext} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Axios } from 'axios';
import google from 'googlethis';
import Search from './components/Search';
import VehicleDetails from './components/VehicleDetails';
import SearchResult from './components/SearchResult';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)


// const searchImages = async () => {
//   let images = await google.image('The Wolf Among Us', { safe: false }, { mode: "cors"});
//   console.log(images); 
// }
// searchImages()

function App() {
  const [vehicleInfo, setVehicleInfo] = useState(null)
  const [theme, setTheme] = useState('light')
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const backToSearch = () => {
    navigate('/');
    setVehicleInfo(null)
}

  // JTDKB20U277600828
  return (

    <ThemeContext.Provider value={{theme, toggleTheme }}>
    <div className='app' id={theme} >
      <div className='navBar'>
        {vehicleInfo !== null ? (
          <div className='backToSearch'>
            <button className='backToSearchButton' onClick={backToSearch}>Back to Search</button>
          </div>
        ): null}

        <div className='switch'>
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Search vehicleInfo={vehicleInfo} setVehicleInfo={setVehicleInfo} />} />
        <Route path='details' element={ <VehicleDetails vehicleInfo={vehicleInfo} setVehicleInfo={setVehicleInfo} />} />
        <Route path='test' element={ <SearchResult vehicleInfo={vehicleInfo} setVehicleInfo={setVehicleInfo} />} />
      </Routes>
        
    </div>
</ThemeContext.Provider>

    
  );
}

export default App;
