import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerConducteurComponent } from './Conducteur/lister-conducteur/lister-conducteur.component';

const routes: Routes = [
  {path: 'allConducteur', component:ListerConducteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
