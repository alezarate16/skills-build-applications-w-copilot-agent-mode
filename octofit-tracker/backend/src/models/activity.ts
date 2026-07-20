import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  intensity: string;
  date: string;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  intensity: { type: String, required: true },
  date: { type: String, required: true }
}, { timestamps: true });

export const Activity: Model<IActivity> = mongoose.models.Activity || mongoose.model<IActivity>('Activity', activitySchema);
