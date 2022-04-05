import { Router } from 'express';
import clienteController from '../controllers/ClienteController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, clienteController.index);
router.post('/', loginRequired, clienteController.store);
router.get('/:id', loginRequired, clienteController.show);
router.put('/:id', loginRequired, clienteController.update);
router.delete('/:id', loginRequired, clienteController.delete);

export default router;
