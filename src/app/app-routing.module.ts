import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SebastianComponent } from 'src/views/sebastian/sebastian.component';
import { ExperiencesComponent } from 'src/views/experiences/experiences.component';
import { LandingComponent } from 'src/views/landing/landing.component';
import { DanielaComponent } from 'src/views/daniela/daniela.component';
import { GabrielComponent } from 'src/views/gabriel/gabriel.component';
import { JoseComponent } from 'src/views/jose/jose.component';
import { ManuelComponent } from 'src/views/manuel/manuel.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'sebastian',
    component: SebastianComponent,
  },
  {
    path: 'daniela',
    component: DanielaComponent,
  },
  {
    path: 'gabriel',
    component: GabrielComponent,
  },
  {
    path: 'jose',
    component: JoseComponent,
  },
  {
    path: 'manuel',
    component: ManuelComponent,
  },
  {
    path: 'admin',
    component: ExperiencesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
