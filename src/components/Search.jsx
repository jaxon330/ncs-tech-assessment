import { Axios } from 'axios';
import React, { useState } from 'react';
import VehicleDetails from './VehicleDetails';


const Search = ({setVinNumber, handleSubmit}) => {

    const handleChange = (e) => {
        setVinNumber(e.target.value)
    }


  return (
    <div>
        <h1 className='searchTitle'>Vehicle Search</h1>
        <form className='searchForm' onSubmit={handleSubmit}>
            <label className='searchLabel'>Enter VIN Number:</label>
            <input 
                type="text"  
                className='searchInput' 
                placeholder='Enter VIN Number' 
                onChange={handleChange}
            />
            <button 
                type='submit' 
                className='searchButton'
                
            >
            Search
            </button>
        </form>
    </div>
  )
}

export default Search