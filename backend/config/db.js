import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karitinab:2c61lEf7aJytJapl@cluster0.iih63.mongodb.net/food-delivery').then(() => console.log('DB connected'));
}