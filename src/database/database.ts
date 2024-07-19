import Dexie, { Table } from 'dexie';
import { AnyExercise } from './models/exercise.model';
import { GymSession } from './models/gym-session.model';
import { WorkoutPlan } from './models/workout-plan.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppDB extends Dexie {
    gymSessions!: Table<GymSession, number>;
    workoutPlans!: Table<WorkoutPlan, number>;
    exercises!: Table<AnyExercise, number>;

    constructor() {
        super('gym-tracker-db');
        this.version(1).stores({
            gumSessions: '++id, startTime, endTime, plan, doneExercises',
            workoutPlans: '++id, name, exercises',
            exercises: '++id, name, type, repetitions, sets, weight, duration, speed, distance'
        });
    }
}