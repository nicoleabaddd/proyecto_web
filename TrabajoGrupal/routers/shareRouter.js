import express from 'express';

import {
  createShare,
getShares,
updateShare,
 deleteShare,
} from '../controllers/shareController.js';

const router = express.Router();

router.get('/', getShares);
router.post('/new', createShare);
// router.get('/Share/:id', getShare);
router.put('/update/:id', updateShare);
router.delete('/delete/:id', deleteShare);

export default router;
