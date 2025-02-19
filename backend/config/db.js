import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://adityarai7692:yHA9X6lB7bbCPnbk@cluster0.osfzr.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}