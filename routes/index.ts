import {Router} from 'express';

import photos from  './photos';

const routes = Router();

routes.use('/photos', photos);

export default routes;