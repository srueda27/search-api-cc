"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistenceService = void 0;
const models_1 = require("../models");
const Photos_1 = require("../models/Photos");
models_1.sequelize.addModels([Photos_1.Photos]);
class Service {
    async createPhoto(title, photoUrl, description, shortDescription) {
        await Photos_1.Photos.create({ title, photoUrl, description, shortDescription });
    }
    async getPhoto(photoId) {
        const photo = await Photos_1.Photos.findOne({
            where: { id: photoId },
            raw: true
        });
        return photo;
    }
    async getPhotos() {
        const photos = await Photos_1.Photos.findAll({
            raw: true
        });
        return photos;
    }
}
exports.persistenceService = new Service();
