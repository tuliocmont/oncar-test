import React, { useState, useEffect } from "react";
import axios from "axios";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/vehicles");
        setVehicles(response.data);
      } catch (error) {
        console.error("Erro ao buscar carros:", error);
      }
    };

    fetchVehicles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/vehicles/${id}`);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    } catch (error) {
      console.error("Erro ao deletar veículo:", error);
    }
  };

  return (
    <div>
      <h2>Veículos listados</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.model} - {vehicle.brand} - {vehicle.color} <br></br>
            <button onClick={() => handleDelete(vehicle.id)}>Apagar ⤶</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;
