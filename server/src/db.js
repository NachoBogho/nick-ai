import mongoose from 'mongoose';

export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://localhost/nick-ai');
        console.log('Database connected');
    } catch (error) {
        console.error(error);
    }
    
}
