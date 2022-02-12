'use strict';

import { Sequelize } from 'sequelize-typescript';

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql"
};

export const sequelize = new Sequelize({
  host: config.host,
  database: config.database,
  dialect: config.dialect as "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined,
  username: config.username,
  password: config.password,
  port: 3306,
  logging: false
});
