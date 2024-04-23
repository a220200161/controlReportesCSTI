import mongoose from 'mongoose';
const { Schema } = mongoose;

const classroomSchema = new Schema({
    classroom:{
        type:String,
        required:true,
    },
    isLab:{
        type:Boolean,
        required:true,
    },
    havePc:{
        type:Boolean,
        required:true,
    },
    numbersPc:{
        type:Number,
        required:false,
    },
    created_at: {type:Date,required:true,default:Date.now}
});

const classroomModel = mongoose.model("Classrooms",classroomSchema);

export { classroomModel };