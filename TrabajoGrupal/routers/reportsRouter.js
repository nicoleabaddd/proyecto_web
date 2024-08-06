import express from 'express';

import {
    createReport,
    getReports,
    updateReport,
    deleteReport,
} from '../controllers/reportControllers.js';

const router = express.Router();

router.get('/', getReports);
router.post('/new', createReport);
// router.get('/Report/:id', getReport);
router.put('/update/:id', updateReport);
router.delete('/delete/:id', deleteReport);

export default router;