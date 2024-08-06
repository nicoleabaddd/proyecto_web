import express from 'express';

import {
    createGification,
    getGifications,
    updateGification,
    deleteGification,
} from '../controllers/gamificationControlers.js';

const router = express.Router();

router.get('/', createGification);
router.post('/new', getGifications);
// router.get('/Categories/:id', getCategories);
router.put('/update/:id', updateGification);
router.delete('/delete/:id', deleteGification);

export default router;