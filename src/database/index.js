import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from "../models/User";
import Funcionario from "../models/Funcionario";
import Cliente from "../models/Cliente";
import Tickets from "../models/Tickets";

const models = [User, Funcionario, Cliente, Tickets];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
