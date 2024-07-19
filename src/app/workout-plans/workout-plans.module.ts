import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlansPageComponent } from './page/page.component';
import { WorkoutPlansEditComponent } from './edit/edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseDialogComponent } from './exercise-dialog/exercise-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    WorkoutPlansPageComponent,
    WorkoutPlansEditComponent,
    ExerciseDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class WorkoutPlansModule { }
