import express from "express";
import { getOrder, addOrder } from "../controllers/orderController.js";

const router = express.Router();
router.get('/', getOrder);
router.post('/add', addOrder)

export {router}