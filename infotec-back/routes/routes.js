import { Router } from 'express';
const router = Router();
import { deleteAllVehicles, createVehicle, getVehicles, updateVehicle, deleteVehicle } from '../controllers/vehicleController.js';

router.delete('/vehicles/all', deleteAllVehicles);
router.post('/vehicles', createVehicle);
router.get('/vehicles', getVehicles);
router.put('/vehicles/:id', updateVehicle);
router.delete('/vehicles/:id', deleteVehicle);


export default router;
