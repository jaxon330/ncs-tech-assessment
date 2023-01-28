import React, { useState } from 'react';


const VehicleDetails = ({vehicleInfo, setVehicleInfo }) => {

    const { 
      Make, 
      Model, 
      BodyClass, 
      ElectrificationLevel, 
      ModelYear, 
      VIN, 
      VehicleType, 
      EngineCylinders, 
      DisplacementL,
      FuelTypePrimary,
      FuelTypeSecondary,
      ErrorCode
    } = vehicleInfo?.Results[0]
    console.log(vehicleInfo)


  
  return (
    <div className='container'>
          {ErrorCode === "0" ? (

              <div className='vehicleDetails' >
                <h1>{Make} {Model} {ModelYear} - VIN: {VIN}</h1>
                <h2>Vehicle Details</h2>
                <p>Brand: {Make} </p>
                <p>Model: {Model} </p>
                <p>Year: {ModelYear} </p>
                <p>Body Style: {BodyClass} </p>
                <p>ElectrificationLevel: {ElectrificationLevel} </p>
                <p>Engine: {DisplacementL}L {EngineCylinders}</p>
                <p>Cylinders: {EngineCylinders}</p>
                <p>Fuel Type: {FuelTypeSecondary !== '' ? `${FuelTypePrimary} and ${FuelTypeSecondary}` : FuelTypePrimary } </p>
                <p>Vehicle Type: {VehicleType} </p>
              </div>
          ) : <h1>Manufacturer is not registered with NHTSA or VIN is incorrect!</h1>}

    </div>
  )
}

export default VehicleDetails