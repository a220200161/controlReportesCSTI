import mongoose from 'mongoose';
const { Schema } = mongoose;

const reportSchema = new Schema({
    description:{
        type:String,
        required:true,
    },
    classroomId:{
        type:Number,
        required:true,
    },
    professor:{
        type:String,
        required:false,
    },
    status:{
        type:Boolean,
        required:true,
    }
});

const reportModel = mongoose.model("Reports",reportSchema);

export { reportModel };