import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterConducteurComponent } from './Conducteur/ajouter-conducteur/ajouter-conducteur.component';
import { DetailConducteurComponent } from './Conducteur/detail-conducteur/detail-conducteur.component';
import { ListerConducteurComponent } from './Conducteur/lister-conducteur/lister-conducteur.component';
import { UpdateConducteurComponent } from './Conducteur/update-conducteur/update-conducteur.component';

const routes: Routes = [
  {path: 'allConducteur', component:ListerConducteurComponent},
  {path: 'addConducteur', component:AjouterConducteurComponent},
  {path: 'editConducteur/:id', component:UpdateConducteurComponent},
  {path: 'detailConducteur/:id', component:DetailConducteurComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
