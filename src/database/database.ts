import Dexie, { Table } from 'dexie';
import { AnyExercise } from './models/exercise.model';
import { GymSession } from './models/gym-session.model';
import { WorkoutPlan } from './models/workout-plan.model';

export class AppDB extends Dexie {
    gymSessions!: Table<GymSession>;
    workoutPlans!: Table<WorkoutPlan>;
    exercises!: Table<AnyExercise>;

    constructor() {
        super('gym-tracker-db');
        this.version(0).stores({
            gumSessions: '++id, startTime, endTime, plan, doneExercises',
            workoutPlans: '++id, name, exercises',
            exercises: '++id, name, type, repetitions. sets, weight, duration, speed, distance'
        });
    }
}