import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import funcionarioRoutes from './src/routes/funcionarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import clienteRoutes from './src/routes/clienteRoutes';
import ticketRoutes from './src/routes/ticketRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/funcionarios/', funcionarioRoutes);
    this.app.use('/clientes/', clienteRoutes);
    this.app.use('/tickets/', ticketRoutes);
  }
}

export default new App().app;
