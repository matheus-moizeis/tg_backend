import { Router } from 'express';
import ticketController from "../controllers/TicketController";

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, ticketController.store);
router.get('/', loginRequired, ticketController.index);
router.get('/all', loginRequired, ticketController.allTickets);
router.get('/finished', loginRequired, ticketController.finishedTickets);
router.get('/:id', loginRequired, ticketController.show);
router.put('/:id', loginRequired, ticketController.update);
router.delete('/:id', loginRequired, ticketController.delete);

export default router;
