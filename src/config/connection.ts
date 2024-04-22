import mongoose from "mongoose";

mongoose.Promise = Promise;
const connectMongo= async () =>{
    try {
        await mongoose.connect(`${process.env.MONGO}`);
        console.log('conexion');
    }
    catch(error){

    }
}
export default connectMongo;