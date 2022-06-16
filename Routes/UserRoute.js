import express from 'express';
import { getUSer, updateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUSer)
router.put('/:id', updateUser)

export default router; 