import Router from "express";

import { persistenceService } from "../services/PersistenceService";

const router = Router();

router.get('/:photoId?', async function (request, response) {
  console.log('GET Photos started');
  const photoId = request.params.photoId;

  try {
    if (photoId) {
      const photo = await persistenceService.getPhotoById(parseInt(photoId));
      response.status(200).send(photo);
    } else {
      const photos = await persistenceService.getPhotos();
      response.status(200).send(photos);
    }

    console.log('GET Photos by Id finished');
  } catch (error) {
    console.log('Get Photo by Id Error: ', error);
    response.status(500).send();
  }
});

router.get('/title/:title', async function (request, response) {
  console.log('GET Photos by Title started');
  const title = request.params.title;

  try {
    const photos = await persistenceService.getPhotoBySimilarTitle(title);
    response.status(200).send(photos);

    console.log('GET Photos by Title finished');
  } catch (error) {
    console.log('Get Photo by Title Error: ', error);
    response.status(500).send();
  }
});

router.post('/', async function (request, response) {
  console.log('POST Photos started');

  const title = request.body.title;
  const photoUrl = request.body.photoUrl;
  const description = request.body.description;
  const shortDescription = request.body.shortDescription;

  if (!title && !photoUrl && !description && !shortDescription) {
    response.status(400).send();
  }

  try {
    await persistenceService.createPhoto(title, photoUrl, description, shortDescription);

    response.status(200).send();
  } catch (error) {
    console.log('POST Photo Error: ', error);
    response.status(500).send();
  }
});

export default router;