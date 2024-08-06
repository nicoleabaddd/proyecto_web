import express from 'express';

import {
  createUser,
getUsers,
updateUser,
 deleteUser,
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/new', createUser);
// router.get('/User/:id', getUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
