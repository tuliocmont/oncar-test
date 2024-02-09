const express = require("express");
const cors = require("cors");
const createVehicle = require("./vehicle");
const createSimulation = require("./simulation");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

let vehicles = [];
let simulations = [];

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.post("/vehicles", (req, res) => {
  const { model, brand, color } = req.body;
  const newVehicle = createVehicle(vehicles.length + 1, model, brand, color);
  vehicles.push(newVehicle);
  res.status(201).json(newVehicle);
});

app.delete("/vehicles", (req, res) => {
  vehicles = [];
  res.sendStatus(204);
});

app.delete("/vehicles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = vehicles.findIndex((vehicle) => vehicle.id === id);
  if (index !== -1) {
    vehicles.splice(index, 1);
    res
      .status(200)
      .json({ message: `Veículo com ID ${id} removido com sucesso.` });
  } else {
    res.status(404).json({ error: `Veículo com ID ${id} não encontrado.` });
  }
});

app.get("/simulations", (req, res) => {
  res.json(simulations);
});

app.post("/simulations", (req, res) => {
  const { vehicleId, customerId } = req.body;
  const approvalStatus = createSimulation();
  const newSimulation = {
    id: simulations.length + 1,
    vehicleId,
    customerId,
    approvalStatus,
  };
  simulations.push(newSimulation);
  res.status(201).json(newSimulation);
});

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
