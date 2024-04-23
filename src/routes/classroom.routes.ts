import express from "express";
import classroomController from "../controllers/classroom.controller";

const classroomRoutes =express.Router();

classroomRoutes.post('/register-classroom',classroomController.registerClass);

export default classroomRoutes;