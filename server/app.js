import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import chatRoutes from './routes/chat.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/webhook', chatRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto: ${PORT}`);
});
