import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    title: String,
    desc: String,
    img: String,
    author: String,
    position: String,
    url: String,
    date: String,
    stars: Number,
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
