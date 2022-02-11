"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photos_1 = __importDefault(require("./photos"));
const routes = (0, express_1.Router)();
routes.use('/', photos_1.default);
exports.default = routes;