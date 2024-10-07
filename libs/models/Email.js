import mongoose from 'mongoose';

const EmailSchema = mongoose.Schema({
    email: { type: String, required: true },
});

export default mongoose.models.Email || mongoose.model('Email', EmailSchema);
