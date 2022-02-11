import {Router} from 'express';

import photos from  './photos';

const routes = Router();

routes.use('/', photos);

export default routes;