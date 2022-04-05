import { Router } from 'express';
import funcionarioController from '../controllers/FuncionarioController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, funcionarioController.strore);
router.get('/', loginRequired, funcionarioController.index);
router.get('/:id', loginRequired, funcionarioController.show);
router.put('/:id', loginRequired, funcionarioController.update);
router.delete('/:id', loginRequired, funcionarioController.delete);

export default router;
