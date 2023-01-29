import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./shared/components/Search/index";
import VehicleDetails from "./shared/components/VehicleDetails/index";
import { Container } from "./generalStyles.js";

const App = () => {
  const [vehicleInfo, setVehicleInfo] = useState(null);

  // JTDKB20U277600828
  return (
    <Container>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Search
                vehicleInfo={vehicleInfo}
                setVehicleInfo={setVehicleInfo}
              />
            }
          />
          <Route
            path="details"
            element={
              <VehicleDetails
                vehicleInfo={vehicleInfo}
                setVehicleInfo={setVehicleInfo}
              />
            }
          />
        </Routes>
      </div>
    </Container>
  );
};

export default App;
