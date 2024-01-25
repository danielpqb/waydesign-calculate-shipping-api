import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { shippingRouter } from "../src/routers/shippingRouter.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/calculate", shippingRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
