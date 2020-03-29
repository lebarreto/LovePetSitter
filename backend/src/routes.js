import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import ClientController from './app/controllers/ClientController';
import FileController from './app/controllers/FileController';
import PetsController from './app/controllers/PetsController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.get('/user', UserController.listAll);
routes.get('/user/:id', UserController.listById);
routes.delete('/user/:id', UserController.delete);

routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.get('/clients', ClientController.listAll);
routes.get('/clients/:id', ClientController.listById);
routes.delete('/clients/:id', ClientController.delete);

routes.post('/pets', PetsController.store);
routes.put('/pets/:id', PetsController.update);

routes.post('/files', upload.single('file'), FileController.upload);

export default routes;
