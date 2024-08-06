import express from 'express';

import {
    createUserHasReport,
    getUserHasReports,
    updateUserHasReport,
    deleteUserHasReport,
} from '../controllers/userHasReportsController.js';

const router = express.Router();

router.get('/', getUserHasReports);
router.post('/new', createUserHasReport);
// router.get('/UserHasReport/:id', getUserHasReport);
router.put('/update/:id', updateUserHasReport);
router.delete('/delete/:id', deleteUserHasReport);

export default router;