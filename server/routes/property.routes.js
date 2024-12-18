import express from 'express';
import { createProperty, deleteProperty, getAllProperties, getTheProperty, updateProperty } from '../controllers/property.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createProperty)
router.delete('/delete/:id', verifyToken, deleteProperty)
router.post('/update/:id', verifyToken, updateProperty)
router.get('/get-property/:id', getTheProperty)
router.get('/all-properties', getAllProperties)

export default router