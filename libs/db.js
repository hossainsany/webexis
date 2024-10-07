import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please add MONGODB URI to .env');
}

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
        });

        connection.on('error', (err) => {
            console.error(`MongoDB Connection Error ${err}`);
            process.exit(1);
        });
    } catch (err) {
        console.error(`Failed to connect to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

export default dbConnect;
