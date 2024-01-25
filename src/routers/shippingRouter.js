import express from "express";
import { calculateShippingValue } from "../controllers/shippingController.js";

const router = express.Router();

router.post("/", calculateShippingValue);

export { router as shippingRouter };
