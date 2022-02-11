"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PersistenceService_1 = require("../services/PersistenceService");
const router = express_1.default();
router.get('/photos/:photoId?', async function (request, response) {
    console.log('GET Photos started');
    const photoId = request.params.photoId;
    try {
        if (photoId) {
            const photo = await PersistenceService_1.persistenceService.getPhoto(parseInt(photoId));
            response.status(200).send(photo);
        }
        else {
            const photos = await PersistenceService_1.persistenceService.getPhotos();
            response.status(200).send(photos);
        }
        console.log('GET Photos by Id finished');
    }
    catch (error) {
        console.log('Get Photo by Id Error: ', error);
        response.status(500).send();
    }
});
router.post('/photos', async function (request, response) {
    console.log('POST Photos started');
    const title = request.body.title;
    const photoUrl = request.body.photoUrl;
    const description = request.body.description;
    const shortDescription = request.body.shortDescription;
    try {
        await PersistenceService_1.persistenceService.createPhoto(title, photoUrl, description, shortDescription);
        response.status(200).send();
    }
    catch (error) {
        console.log('POST Photo Error: ', error.errors[0].message);
        response.status(500).send();
    }
});
exports.default = router;
