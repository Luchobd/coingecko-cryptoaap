import dotenv from 'dotenv';
dotenv.config();
import {connect} from 'mongoose';

async function dbConnect() {
    try {
        await connect(process.env.MONGO_URL as string);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;