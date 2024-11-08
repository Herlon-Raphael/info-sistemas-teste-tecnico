import { v4 as uuidv4 } from "uuid";
import { getAllVehicles, saveVehicles } from "../models/vehicleModel.js";

export function createVehicle(req, res) {
  const { placa, chassi, renavam, modelo, marca, ano } = req.body;

  if (!placa || !chassi || !renavam || !modelo || !marca || !ano) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  const newVehicle = {
    id: uuidv4(),
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano,
  };
  const vehicles = getAllVehicles();
  vehicles.push(newVehicle);
  saveVehicles(vehicles);
  res.status(201).json(newVehicle);
}

export function getVehicles(req, res) {
  res.json(getAllVehicles());
}

export function updateVehicle(req, res) {
  const { id } = req.params;
  const vehicles = getAllVehicles();
  const index = vehicles.findIndex((vehicle) => vehicle.id === id);

  if (index === -1)
    return res.status(404).json({ message: "Veículo não encontrado" });

  vehicles[index] = { ...vehicles[index], ...req.body };
  saveVehicles(vehicles);
  res.json(vehicles[index]);
}

export function deleteVehicle(req, res) {
  const { id } = req.params;
  let vehicles = getAllVehicles();
  const vehicleIndex = vehicles.findIndex((vehicle) => vehicle.id === id);

  if (vehicleIndex === -1) {
    return res.status(404).json({ message: "Veículo não encontrado" });
  }

  vehicles = vehicles.filter((vehicle) => vehicle.id !== id);
  saveVehicles(vehicles);
  res.status(204).send();
}

export function deleteAllVehicles(req, res) {
  let vehicles = [];
  saveVehicles(vehicles);
  res.status(204).send();
}
