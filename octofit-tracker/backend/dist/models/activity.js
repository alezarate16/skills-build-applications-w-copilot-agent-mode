import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    intensity: { type: String, required: true },
    date: { type: String, required: true }
}, { timestamps: true });
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
