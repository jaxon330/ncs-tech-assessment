import React from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleDetails = ({vehicleInfo}) => {

    const navigate = useNavigate();
    const backToSearch = () => {
        navigate('/')
    }

    const {Make, Model, ModelYear, BodyClass, ElectrificationLevel, VIN} = vehicleInfo.Results[0]
  return (
    <div className='vehicleDetails'>
        <button onClick={backToSearch}>Back to Search</button>
        <h1>Vehicle Information</h1>
        <p>Make: {Make} </p>
        <p>Model: {Model} </p>
        <p>Year: {ModelYear} </p>
        <p>VIN Number: {VIN}</p>
        <p>Body Style: {BodyClass}</p>
        <p>ElectrificationLevel: {ElectrificationLevel}</p>
    </div>
  )
}

export default VehicleDetails