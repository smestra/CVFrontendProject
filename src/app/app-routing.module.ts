import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sebastianComponent } from 'src/views/sebastian/sebastian.component';
import { ExperiencesComponent } from 'src/views/experiences/experiences.component';

const routes: Routes = [
  {
    path: '', component: sebastianComponent
  },
  {
    path: 'admin', component: ExperiencesComponent
  },
  // {
  //   path: 'admin/nueva-experiencia', component: ExperiencesFormComponent
  // }
  {
    path:'**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
