import request from "supertest";
import { expect } from "chai";
import app from "../app.js";

const validVehicleData = {
  placa: "ABC-1234",
  chassi: "XYZ123456789",
  renavam: "1234567890",
  modelo: "Fusca",
  marca: "Volkswagen",
  ano: 1965,
};

let vehicleId; 

describe("Vehicle API Endpoints", () => {
  it("should create a vehicle and return 201 status with vehicle data in response", async () => {
    const res = await request(app)
      .post("/api/vehicles")
      .send(validVehicleData)
      .set("Accept", "application/json");

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("id");
    expect(res.body.placa).to.equal(validVehicleData.placa);

    vehicleId = res.body.id;
  });

  it("should retrieve an array of vehicles and return 200 status", async () => {
    const res = await request(app).get("/api/vehicles");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.be.greaterThan(0);
  });

  it("should update an existing vehicle's model and return 200 status with updated data", async () => {
    const updatedData = { modelo: "Gol" };

    const res = await request(app)
      .put(`/api/vehicles/${vehicleId}`)
      .send(updatedData)
      .set("Accept", "application/json");

    expect(res.status).to.equal(200);
    expect(res.body.modelo).to.equal(updatedData.modelo);
  });

  it("should delete the specified vehicle by ID and return 204 status", async () => {
    const res = await request(app).delete(`/api/vehicles/${vehicleId}`);
    expect(res.status).to.equal(204);

    const getRes = await request(app).get("/api/vehicles");
    const deletedVehicle = getRes.body.find((vehicle) => vehicle.id === vehicleId);
    expect(deletedVehicle).to.be.undefined;
  });

  it("should delete all vehicles and return 204 status", async () => {
    const res = await request(app).delete("/api/vehicles/all");
    expect(res.status).to.equal(204);

    const getRes = await request(app).get("/api/vehicles");
    expect(getRes.body).to.be.an("array").that.is.empty;
  });

  it("should return 400 status when creating vehicle with missing required fields", async () => {
    const incompleteData = { ...validVehicleData };
    delete incompleteData.placa;

    const res = await request(app)
      .post("/api/vehicles")
      .send(incompleteData)
      .set("Accept", "application/json");

    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal("Preencha todos os campos");
  });

  it("should return 404 status when attempting to update a non-existent vehicle", async () => {
    const res = await request(app)
      .put("/api/vehicles/nonexistent-id")
      .send({ modelo: "Golf" })
      .set("Accept", "application/json");

    expect(res.status).to.equal(404);
    expect(res.body.message).to.equal("Veículo não encontrado");
  });

  it("should return 404 status when attempting to delete a non-existent vehicle", async () => {
    const res = await request(app).delete("/api/vehicles/nonexistent-id");
    expect(res.status).to.equal(404);
    expect(res.body.message).to.equal("Veículo não encontrado");
  });
});
