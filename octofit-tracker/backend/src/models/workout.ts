import mongoose, { Schema, type Document, type Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  category: string;
  durationMinutes: number;
  difficulty: string;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String, required: true }
}, { timestamps: true });

export const Workout: Model<IWorkout> = mongoose.models.Workout || mongoose.model<IWorkout>('Workout', workoutSchema);
