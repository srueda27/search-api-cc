'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
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
