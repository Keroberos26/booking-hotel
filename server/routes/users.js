import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../app/controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/check-user/:id', verifyUser, (req, res) => {
//   res.send('User OK');
// });

// router.get('/check-admin/:id', verifyAdmin, (req, res) => {
//   res.send('Admin OK');
// });

//Create
router.post('/', createUser);

//Update
router.put('/:id', verifyUser, updateUser);

//Delete
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get('/:id', verifyUser, getUser);

//GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
