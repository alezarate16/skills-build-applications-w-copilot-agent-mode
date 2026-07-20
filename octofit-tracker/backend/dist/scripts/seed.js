import mongoose from 'mongoose';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Workout } from '../models/workout.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({})
        ]);
        const users = await User.insertMany([
            {
                name: 'Ava Martinez',
                email: 'ava@example.com',
                fitnessGoal: 'Improve endurance',
                level: 'Intermediate'
            },
            {
                name: 'Liam Chen',
                email: 'liam@example.com',
                fitnessGoal: 'Build strength',
                level: 'Advanced'
            },
            {
                name: 'Nia Brooks',
                email: 'nia@example.com',
                fitnessGoal: 'Increase mobility',
                level: 'Beginner'
            }
        ]);
        await Team.insertMany([
            {
                name: 'River Runners',
                sport: 'Running',
                members: users.slice(0, 2).map((user) => user._id.toString())
            },
            {
                name: 'Peak Power',
                sport: 'CrossFit',
                members: [users[2]._id.toString()]
            }
        ]);
        await Activity.insertMany([
            {
                userId: users[0]._id.toString(),
                type: 'Run',
                durationMinutes: 35,
                intensity: 'Moderate',
                date: '2026-07-20'
            },
            {
                userId: users[1]._id.toString(),
                type: 'Strength',
                durationMinutes: 60,
                intensity: 'High',
                date: '2026-07-19'
            },
            {
                userId: users[2]._id.toString(),
                type: 'Yoga',
                durationMinutes: 30,
                intensity: 'Low',
                date: '2026-07-18'
            }
        ]);
        await LeaderboardEntry.insertMany([
            { userId: users[0]._id.toString(), score: 980, rank: 1, streak: 7 },
            { userId: users[1]._id.toString(), score: 945, rank: 2, streak: 5 },
            { userId: users[2]._id.toString(), score: 890, rank: 3, streak: 3 }
        ]);
        await Workout.insertMany([
            {
                name: 'Tempo Run',
                category: 'Cardio',
                durationMinutes: 40,
                difficulty: 'Intermediate'
            },
            {
                name: 'Full Body Strength',
                category: 'Strength',
                durationMinutes: 45,
                difficulty: 'Advanced'
            },
            {
                name: 'Mobility Flow',
                category: 'Recovery',
                durationMinutes: 25,
                difficulty: 'Beginner'
            }
        ]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
