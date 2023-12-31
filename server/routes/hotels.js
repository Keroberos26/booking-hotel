import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../app/controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel);

//Update
router.put('/:id', verifyAdmin, updateHotel);

//Delete
router.delete('/:id', verifyAdmin, deleteHotel);

//GET
router.get('/find/:id', getHotel);

//GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/', getHotels);

export default router;
