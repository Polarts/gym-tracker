import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlansPageComponent } from './workout-plans/page/page.component';
import { GymSessionsPageComponent } from './gym-sessions/page/page.component';
import { WorkoutPlansEditComponent } from './workout-plans/edit/edit.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'sessions', 
    pathMatch: 'full' 
  },
  { 
    path: "sessions", 
    component: GymSessionsPageComponent, 
    pathMatch: 'full',
  },
  { 
    path: "plans", 
    component: WorkoutPlansPageComponent, 
    pathMatch: 'full',
  },
  {
    path: 'plans/edit/:id',
    component: WorkoutPlansEditComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
