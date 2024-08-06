import express from 'express';

import {
    createRoll,
    getRolls,
    updateRoll,
    deleteRoll,
} from '../controllers/rollsController.js';

const router = express.Router();

router.get('/', createRoll);
router.post('/new', getRolls);
// router.get('/Categories/:id', getCategories);
router.put('/update/:id', updateRoll);
router.delete('/delete/:id', deleteRoll);

export default router;