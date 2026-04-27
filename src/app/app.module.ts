import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { sebastianComponent } from '../views/sebastian/sebastian.component';

// import { ExperienceFormComponent } from './pages/admin/experience-form/experience-form.component';
import { ExperiencesComponent } from 'src/views/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    sebastianComponent,
    ExperiencesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}