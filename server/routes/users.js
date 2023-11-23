import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../app/controllers/user.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/check-authentication', verifyToken, (req, res) => {
  res.send('Authentication OK');
});

router.get('/check-user/:id', verifyUser, (req, res) => {
  res.send('User OK');
});

//Create
router.post('/', createUser);

//Update
router.put('/:id', updateUser);

//Delete
router.delete('/:id', deleteUser);

//GET
router.get('/:id', getUser);

//GET ALL
router.get('/', getUsers);

export default router;
