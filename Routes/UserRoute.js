import express from 'express';
import { deleteUser, followUSer, getUSer, updateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUSer)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUSer)

export default router; 