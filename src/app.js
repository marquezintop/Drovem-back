import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import classRouter from "./routes/classes.routes.js";
import studentsRouter from "./routes/students.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(classRouter);
app.use(studentsRouter);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));