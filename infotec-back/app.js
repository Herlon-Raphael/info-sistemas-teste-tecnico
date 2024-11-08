import express, { json } from 'express';
import pkg from 'body-parser';
const { json: _json } = pkg;
import vehicleRoutes from './routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(_json());

app.use('/api', vehicleRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;  // Garantir que o app seja exportado corretamente
