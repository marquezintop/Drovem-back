import {Router} from "express";
import { changeClass, getStudentsById, registerStudent } from "../controllers/students.controller.js";

const studentsRouter = Router();

studentsRouter.post("/register", registerStudent);
studentsRouter.put("/changeClass/:id", changeClass);
studentsRouter.get("/getStudent/:id", getStudentsById)

export default studentsRouter;