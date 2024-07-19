import { Exercise } from "./exercise.model";

export interface WorkoutPlan {
    id?: number;
    name: string;
    exercises: Exercise['id'][];
}