import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: String, required: true },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    streak: { type: Number, required: true }
}, { timestamps: true });
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardSchema);
