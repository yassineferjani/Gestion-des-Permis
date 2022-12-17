import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterConducteurComponent } from './Conducteur/ajouter-conducteur/ajouter-conducteur.component';
import { DetailConducteurComponent } from './Conducteur/detail-conducteur/detail-conducteur.component';
import { ListerConducteurComponent } from './Conducteur/lister-conducteur/lister-conducteur.component';
import { UpdateConducteurComponent } from './Conducteur/update-conducteur/update-conducteur.component';
import { AjouterContraventionComponent } from './Contravention/ajouter-contravention/ajouter-contravention.component';
import { DetailContraventionComponent } from './Contravention/detail-contravention/detail-contravention.component';
import { ListerContraventionComponent } from './Contravention/lister-contravention/lister-contravention.component';
import { UpdateContraventionComponent } from './Contravention/update-contravention/update-contravention.component';
import { AjouterPermisComponent } from './Permis/ajouter-permis/ajouter-permis.component';
import { DetailPermisComponent } from './Permis/detail-permis/detail-permis.component';
import { ListerPermisComponent } from './Permis/lister-permis/lister-permis.component';
import { UpdatePermisComponent } from './Permis/update-permis/update-permis.component';

const routes: Routes = [
  {path: 'allConducteur', component:ListerConducteurComponent},
  {path: 'addConducteur', component:AjouterConducteurComponent},
  {path: 'editConducteur/:id', component:UpdateConducteurComponent},
  {path: 'detailConducteur/:id', component:DetailConducteurComponent},

  {path: 'allPermis', component:ListerPermisComponent},
  {path: 'addPermis', component:AjouterPermisComponent},
  {path: 'editPermis/:id', component:UpdatePermisComponent},
  {path: 'detailPermis/:id', component:DetailPermisComponent},

  {path: 'allContravention', component:ListerContraventionComponent},
  {path: 'addContravention', component:AjouterContraventionComponent},
  {path: 'editContravention/:id', component:UpdateContraventionComponent},
  {path: 'detailContravention/:id', component:DetailContraventionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
