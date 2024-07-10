import express from 'express';
import { createUser, findUser } from '../controllers/user';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', findUser);

export default router;
