import express from 'express';

import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/', createCategory);
router.post('/new', getCategories);
// router.get('/Categories/:id', getCategories);
router.put('/update/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

export default router;