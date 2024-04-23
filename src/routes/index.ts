import classroomRoutes from "./classroom.routes";

const express =require('express');
const app = express();
app.use(classroomRoutes);
export default app;