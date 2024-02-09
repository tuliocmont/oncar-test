import React, { useState } from "react";
import axios from "axios";

function SimulationForm() {
  const [vehicleId, setVehicleId] = useState("");
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/simulations");

      console.log("Resposta a simulação:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
    }
  };

  return (
    <div>
      <h2>Simulação</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome completo:
            <input type="text" onChange={(e) => setVehicleId(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            CPF:
            <input
              type="text"
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            CNH:
            <input
              type="text"
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default SimulationForm;
