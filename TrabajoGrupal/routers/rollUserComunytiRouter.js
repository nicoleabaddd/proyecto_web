import express from 'express';

import {
    createRollUserComunity ,
    getRollUserComunitys,
    updateRollUserComunity ,
    deleteRollUserComunity ,
} from '../controllers/rollUserComuniti.js';

const router = express.Router();

router.get('/', createRollUserComunity );
router.post('/new', getRollUserComunitys);
// router.get('/Categories/:id', getCategories);
router.put('/update/:id', updateRollUserComunity );
router.delete('/delete/:id', deleteRollUserComunity );

export default router;