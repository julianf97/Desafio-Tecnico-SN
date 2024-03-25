import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import tramiteRouter from "./routes/tramiteRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(tramiteRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
