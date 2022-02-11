"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PersistenceService_1 = require("../services/PersistenceService");
const router = express_1.default();
router.get('/photos/:photoId', async function (request, response) {
    console.log('GET Photo by Id started');
    const photoId = parseInt(request.params.photoId);
    try {
        const photo = await PersistenceService_1.persistenceService.getPhoto(photoId);
        response.status(200).send(photo);
        console.log('GET Photo by Id finished');
    }
    catch (error) {
        console.log('Get Photo by Id Error: ', error);
    }
});
router.get('/photos/all', async function (request, response) {
    console.log('GET All Photos started');
    try {
        const photos = await PersistenceService_1.persistenceService.getPhotos();
        response.status(200).send(photos);
        console.log('GET All Photos finished');
    }
    catch (error) {
        console.log('Get Photos Error: ', error);
    }
});
router.post('/photos', async function (request, response) {
    console.log('POST Photo started');
    const title = request.body.title;
    const photoUrl = request.body.photoUrl;
    const description = request.body.description;
    const shortDescription = request.body.shortDescription;
    try {
        await PersistenceService_1.persistenceService.createPhoto(title, photoUrl, description, shortDescription);
        response.status(200).send();
    }
    catch (error) {
        console.log('POST Photo Error: ', error);
        response.status(500).send();
    }
});
exports.default = router;
