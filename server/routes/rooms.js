import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../app/controllers/Room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create
router.post('/:hotelId', verifyAdmin, createRoom);

//Update
router.put('/:id', verifyAdmin, updateRoom);

//Delete
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

//GET
router.get('/:id', getRoom);

//GET ALL
router.get('/', getRooms);

export default router;
