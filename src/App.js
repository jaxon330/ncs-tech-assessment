import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Axios } from 'axios';
import Search from './components/Search';
import VehicleDetails from './components/VehicleDetails';



function App() {

  const [vinNumber, setVinNumber] = useState("")
  const [vehicleInfo, setVehicleInfo] = useState(null)

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinNumber}?format=json`);
    
      console.log(response)
      setVehicleInfo(response);
    } catch (error) {
      console.error(error);
    }
  };
 
  // JDTKB20U277600828
  return (
    <Routes>
      <Route path='/' element={<Search setVinNumber={setVinNumber} handleClick={handleSubmit} />} />
      <Route path='details' element={<VehicleDetails vehicleInfo={vehicleInfo} />} />
    </Routes>
  );
}

export default App;
