"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PersistenceService_1 = require("../services/PersistenceService");
const router = express_1.default();
router.get('/:photoId?', async function (request, response) {
    console.log('GET Photos started');
    const photoId = request.params.photoId;
    try {
        if (photoId) {
            const photo = await PersistenceService_1.persistenceService.getPhotoById(parseInt(photoId));
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
router.get('/title/:title', async function (request, response) {
    console.log('GET Photos by Title started');
    const title = request.params.title;
    try {
        const photos = await PersistenceService_1.persistenceService.getPhotoBySimilarTitle(title);
        response.status(200).send(photos);
        console.log('GET Photos by Title finished');
    }
    catch (error) {
        console.log('Get Photo by Title Error: ', error);
        response.status(500).send();
    }
});
router.post('/', async function (request, response) {
    console.log('POST Photos started');
    console.log('request: ', request);
    const title = request.body.title;
    const photoUrl = request.body.photoUrl;
    const description = request.body.description;
    const shortDescription = request.body.shortDescription;
    if (!title && !photoUrl && !description && !shortDescription) {
        response.status(400).send();
    }
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
