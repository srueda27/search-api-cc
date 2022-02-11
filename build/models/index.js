'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config = {
    username: process.env.DB_USERNAME || 'b14960e753d3a0',
    password: process.env.DB_PASSWORD || '682797ab',
    database: process.env.DB_DATABASE || 'heroku_3c124a857c35d1c',
    host: process.env.DB_HOST || 'us-cdbr-east-05.cleardb.net',
    dialect: "mysql"
};
exports.sequelize = new sequelize_typescript_1.Sequelize({
    host: config.host,
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    port: 3306,
    logging: false
});
