import { Exercise } from "./exercise.model";
import { WorkoutPlan } from "./workout-plan.model";

export interface GymSession {
    id?: number;
    startTime: number;
    endTime: number;
    plan: WorkoutPlan['id'];
    doneExercises: Exercise['id'][];
}