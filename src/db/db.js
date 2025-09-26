import mongoose from "mongoose";

export const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connnected sucessfully");    
    } catch (error) {
        console.log("Error in connect Mongodb",error);
    }
}