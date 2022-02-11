import Router from "express";

const router = Router();
 
router.get('/photos', async function (request, response) {
  response.status(200).send('Oli');
});

export default router;