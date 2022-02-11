"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistenceService = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
const Photos_1 = require("../models/Photos");
models_1.sequelize.addModels([Photos_1.Photos]);
class Service {
    async createPhoto(title, photoUrl, description, shortDescription) {
        await Photos_1.Photos.create({ title, photoUrl, description, shortDescription });
    }
    async getPhotoById(photoId) {
        const photo = await Photos_1.Photos.findOne({
            where: { id: photoId },
            raw: true
        });
        return photo;
    }
    async getPhotoBySimilarTitle(title) {
        const photos = await Photos_1.Photos.findAll({
            where: {
                title: {
                    [sequelize_1.Op.like]: `%${title}%`
                }
            },
            raw: true
        });
        return photos;
    }
    async getPhotos() {
        const photos = await Photos_1.Photos.findAll({
            raw: true
        });
        return photos;
    }
}
exports.persistenceService = new Service();
