import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlansPageComponent } from './page/page.component';
import { WorkoutPlansEditComponent } from './edit/edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkoutPlansPageComponent,
    WorkoutPlansEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class WorkoutPlansModule { }
