import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from "../models/User";
import Funcionario from "../models/Funcionario";
import Cliente from "../models/Cliente";

const models = [User, Funcionario, Cliente];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
