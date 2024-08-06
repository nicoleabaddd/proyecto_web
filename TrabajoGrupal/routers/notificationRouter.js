import express from 'express';

import {
    createNotification,
    getNotifications,
    updateNotification,
    deleteNotification,
} from '../controllers/notificationControllers.js';

const router = express.Router();

router.get('/', getNotifications);
router.post('/new', createNotification);
// router.get('/Notification/:id', getNotification);
router.put('/update/:id', updateNotification);
router.delete('/delete/:id', deleteNotification);

export default router;