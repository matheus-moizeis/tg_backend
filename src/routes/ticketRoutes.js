import { Router } from 'express';
import ticketController from "../controllers/TicketController";

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ticketController.store);
router.get('/', loginRequired, ticketController.index);
router.get('/:id', loginRequired, ticketController.show);
router.put('/:id', loginRequired, ticketController.update);
router.delete('/:id', loginRequired, ticketController.delete);

export default router;
