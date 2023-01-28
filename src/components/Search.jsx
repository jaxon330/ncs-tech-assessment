
import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Spinner from './Spinner'

export const ThemeContext = createContext(null)

const Search = ({ vehicleInfo, setVehicleInfo }) => {

    const [vinNumber, setVinNumber] = useState("");
    const [loading, setLoading] = useState(true)
    const [fields, setFields] = useState(null);


    const navigate = useNavigate();

    const handleChange = (e) => {
        setVinNumber(e.target.value)
    }

    const handleSubmit = async () => {
        if (vinNumber !== "") {
            
            const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValues/${vinNumber}?format=json`
            try {
                let response =  await axios.get(url);
                setVehicleInfo(response.data);
    
                // console.log(response.data.Results[0].Make)
                if(response) {
                    navigate('/details')
                    setFields(false)               
                }
    
            } catch (error) {
                console.log(error)
            }
        } else {
            setFields(true)
        }
        
      };



  return (

        <div>
            <h1 className='searchTitle'>Vehicle Search</h1>
                <input 
                    type="text"  
                    className='searchInput' 
                    placeholder='Enter VIN Number' 
                    onChange={handleChange}
                />
                <button 
                    type='submit' 
                    className='searchButton'
                    onClick={handleSubmit}
                    
                >
                Search
                </button>
                {fields && (
                    <p className='vin-error'>Please enter a VIN</p>
                )}
                

        </div>
  )
}

export default Search