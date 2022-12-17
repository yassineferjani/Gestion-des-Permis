import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conducteur } from "src/app/Models/Conducteur";
import { ConducteurService } from 'src/app/Services/conducteur.service';
@Component({
  selector: 'app-lister-conducteur',
  templateUrl: './lister-conducteur.component.html',
  styleUrls: ['./lister-conducteur.component.css']
})
export class ListerConducteurComponent implements OnInit {
  c!: Conducteur[];
  constructor(private service: ConducteurService, private router : Router) { }

  ngOnInit(): void {
   this.getallConducteur() 
  }
  getallConducteur() {
    this.service.getConducteurs().subscribe({
      next: (response) => {
        this.c = response;
        console.log(response)
      },
      error: err => {
        console.log(err);
      }});
  }

  delete(id :number){
    this.service.deleteConducteur(id).subscribe({
      next: resp=>{
        console.log(resp);
        this.getallConducteur();
      },
      error: err=>{
        console.log(err);
      }}
    );

  }

  detail(conducteur : Conducteur){
    this.router.navigateByUrl("/detailConducteur/"+conducteur.id);
  }

  edit(conducteur : Conducteur){
    this.router.navigateByUrl("/editConducteur/"+conducteur.id);
   } 

}
