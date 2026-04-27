import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// import { ExperienceFormComponent } from './pages/admin/experience-form/experience-form.component';
import { ExperiencesComponent } from 'src/views/experiences/experiences.component';
import { LandingComponent } from 'src/views/landing/landing.component';
import { DanielaComponent } from 'src/views/daniela/daniela.component';
import { GabrielComponent } from 'src/views/gabriel/gabriel.component';
import { JoseComponent } from 'src/views/jose/jose.component';
import { ManuelComponent } from 'src/views/manuel/manuel.component';
import { SebastianComponent } from 'src/views/sebastian/sebastian.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LandingComponent,
    DanielaComponent,
    GabrielComponent,
    JoseComponent,
    ManuelComponent,
    SebastianComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}