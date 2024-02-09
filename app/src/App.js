import "./App.css";
import SimulationForm from "./components/SimulationForm";
import VehicleForm from "./components/VehicleForm";
import VehicleList from "./components/VehicleList";

function App() {
  document.title = "OnCar";
  return (
    <div className="App">
      <h1 className="app-header">Simulador de financiamento</h1>
      <div className="content-container">
        <div className="form-container">
          <SimulationForm />
        </div>
        <div className="form-container">
          <VehicleForm />
        </div>
        <div className="list-container">
          <VehicleList />
        </div>
        <div className="button-container">
          <button className="round-button">$</button>
        </div>
      </div>
    </div>
  );
}

export default App;
