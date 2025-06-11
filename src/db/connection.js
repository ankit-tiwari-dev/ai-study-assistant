import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            writeConcern: { w: 1 },
            retryWrites: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4,
            maxPoolSize: 10,
            minPoolSize: 4,
            connectTimeoutMS: 10000,
            heartbeatFrequencyMS: 100000,
        })
        console.log(`MONGODB CONNECTED !! DB HOST ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error : ", error);
        process.exit(1)
    }
}

export default connectDB;