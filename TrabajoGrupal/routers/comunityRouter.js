import express from 'express';

import {
  createCommunity,
  getCommunities,
updateCommunity,
 deleteCommunity,
} from '../controllers/comunityControllers.js';

const router = express.Router();

router.get('/', getCommunities);
router.post('/new', createCommunity);
// router.get('/Community/:id', getCommunity);
router.put('/update/:id', updateCommunity);
router.delete('/delete/:id', deleteCommunity);

export default router;