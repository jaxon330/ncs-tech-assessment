import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';

const SearchResult = ({vehicleInfo, setVehicleInfo }) => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

//   const { 
//     Make, 
//     Model, 
//     BodyClass, 
//     ElectrificationLevel, 
//     ModelYear, 
//     VIN, 
//     VehicleType, 
//     EngineCylinders, 
//     DisplacementL,
//     FuelTypePrimary,
//     FuelTypeSecondary,
//     ErrorCode
//   } = vehicleInfo?.Results[0]
//   console.log(vehicleInfo)



  const backToSearch = () => {
      navigate('/');
      setVehicleInfo(null)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={handleDarkMode}>Toggle Dark Mode</button>
      <Container fluid={true}>
        <Row>
          <Col xs={12} md={6}>
            <p>Content goes here</p>
          </Col>
          <Col xs={12} md={6}>
            <Table bordered striped responsive={true} className={darkMode ? "table-dark" : ""}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>

                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>

                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchResult;