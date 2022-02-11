import Router from "express";

import { persistenceService } from "../services/PersistenceService";

const router = Router();

router.get('/photos/:photoId', async function (request, response) {
  console.log('GET Photo by Id started');
  const photoId = parseInt(request.params.photoId);

  try {
    const photo = await persistenceService.getPhoto(photoId);

    response.status(200).send(photo);
    console.log('GET Photo by Id finished');
  } catch (error) {
    console.log('Get Photo by Id Error: ', error);
    response.status(500).send();
  }
});

router.get('/photos/all', async function (request, response) {
  console.log('GET All Photos started');
  try {
    const photos = await persistenceService.getPhotos();

    response.status(200).send(photos);
    console.log('GET All Photos finished');
  } catch (error) {
    console.log('Get Photos Error: ', error);
    response.status(500).send();
  }
});

router.post('/photos', async function (request, response) {
  console.log('POST Photo started');

  const title = request.body.title;
  const photoUrl = request.body.photoUrl;
  const description = request.body.description;
  const shortDescription = request.body.shortDescription;

  try {
    await persistenceService.createPhoto(title, photoUrl, description, shortDescription);

    response.status(200).send();
  } catch (error) {
    console.log('POST Photo Error: ', error);
    response.status(500).send();
  }
});

export default router;