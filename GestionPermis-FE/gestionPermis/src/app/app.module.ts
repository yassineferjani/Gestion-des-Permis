import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ListerConducteurComponent } from './Conducteur/lister-conducteur/lister-conducteur.component';
import { AjouterConducteurComponent } from './Conducteur/ajouter-conducteur/ajouter-conducteur.component';
import { UpdateConducteurComponent } from './Conducteur/update-conducteur/update-conducteur.component';
import { DetailConducteurComponent } from './Conducteur/detail-conducteur/detail-conducteur.component';
import { AjouterPermisComponent } from './Permis/ajouter-permis/ajouter-permis.component';
import { ListerPermisComponent } from './Permis/lister-permis/lister-permis.component';
import { UpdatePermisComponent } from './Permis/update-permis/update-permis.component';
import { DetailPermisComponent } from './Permis/detail-permis/detail-permis.component';
import { AjouterContraventionComponent } from './Contravention/ajouter-contravention/ajouter-contravention.component';
import { ListerContraventionComponent } from './Contravention/lister-contravention/lister-contravention.component';
import { UpdateContraventionComponent } from './Contravention/update-contravention/update-contravention.component';
import { DetailContraventionComponent } from './Contravention/detail-contravention/detail-contravention.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerConducteurComponent,
    AjouterConducteurComponent,
    UpdateConducteurComponent,
    DetailConducteurComponent,
    AjouterPermisComponent,
    ListerPermisComponent,
    UpdatePermisComponent,
    DetailPermisComponent,
    AjouterContraventionComponent,
    ListerContraventionComponent,
    UpdateContraventionComponent,
    DetailContraventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
