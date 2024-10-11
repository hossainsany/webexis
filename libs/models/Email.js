import mongoose from 'mongoose';

const EmailSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
});

export default mongoose.models.Email || mongoose.model('Email', EmailSchema);
