import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Exercise } from './models/exercise.model';
import { GymSession } from './models/gym-session.model';
import { WorkoutPlan } from './models/workout-plan.model';

@Injectable({
    providedIn: 'root'
})
export class AppDB extends Dexie {
    gymSessions!: Table<GymSession, number>;
    workoutPlans!: Table<WorkoutPlan, number>;
    exercises!: Table<Exercise, number>;

    constructor() {
        super('gym-tracker-db');
        this.version(1).stores({
            gumSessions: '++id, startTime, endTime, plan, doneExercises',
            workoutPlans: '++id, name, exercises',
            exercises: '++id, name, type, repetitions, sets, weight, duration, speed, distance'
        });
    }
}