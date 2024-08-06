import express from 'express';

import {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent,
} from '../controllers/eventControllers.js';

const router = express.Router();

router.get('/', getEvents);
router.post('/new', createEvent);
// router.get('/Event/:id', getEvent);
router.put('/update/:id', updateEvent);
router.delete('/delete/:id', deleteEvent);

export default router;