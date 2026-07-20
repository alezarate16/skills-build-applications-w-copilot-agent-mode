import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true }
}, { timestamps: true });
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
