import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import Database from './database';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//rotas autenticadas

routes.use(authMiddleware);
routes.put('/users', UserController.update);

//uploads

routes.post('/files', upload.single('file'), FileController.store);

export default routes;