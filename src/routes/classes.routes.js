import {Router} from "express";
import { addClass, getClasses, getClassesById } from "../controllers/classes.controller.js";

const classRouter = Router();

classRouter.post("/addClass", addClass);
classRouter.get("/getClasses", getClasses);
classRouter.get("/getClasses/:id", getClassesById);

export default classRouter;