import express from 'express';

import {
    createGificationsHasUser,
    getGificationsHasUsers,
    updateGificationsHasUser,
    deleteGificationsHasUser,
} from '../controllers/gamificationhasUserControllers.js';

const router = express.Router();

router.get('/', createGificationsHasUser);
router.post('/new', getGificationsHasUsers);
// router.get('/Categories/:id', getCategories);
router.put('/update/:id', updateGificationsHasUser);
router.delete('/delete/:id', deleteGificationsHasUser);

export default router;