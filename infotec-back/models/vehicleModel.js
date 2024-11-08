import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, writeFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataFilePath = join(__dirname, "../data/vehicles.json");

function getAllVehicles() {
  const data = readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data || "[]");
}

function saveVehicles(data) {
  writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

export { getAllVehicles, saveVehicles };
