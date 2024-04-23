import { classroomModel } from "../models/classroom"
const classroomController: any={}

classroomController.registerClass=async(req:any,res:any)=>{
    try{
        const newClassroom=await classroomModel.create({...req.body})
        res.status(200).send(newClassroom);
    }catch(error){
        return res.status(400).json({
            error: (error as Error).message,
        })
        
    }
}
export default classroomController