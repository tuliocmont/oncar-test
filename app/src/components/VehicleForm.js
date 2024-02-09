import React, { useState } from "react";
import axios from "axios";

function VehicleForm() {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/vehicles", {
        model,
        brand,
        color,
      });

      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
    }
  };

  return (
    <div>
      <h2>Registro de veículo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Modelo:
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Marca:
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <button onClick={handleClickandRefresh} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

function handleClickandRefresh() {
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

export default VehicleForm;
