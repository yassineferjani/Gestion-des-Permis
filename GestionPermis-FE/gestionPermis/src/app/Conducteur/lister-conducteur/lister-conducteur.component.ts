import { Component, OnInit } from '@angular/core';
import { Conducteur } from "src/app/Models/Conducteur";
import { ConducteurService } from 'src/app/Services/conducteur.service';
@Component({
  selector: 'app-lister-conducteur',
  templateUrl: './lister-conducteur.component.html',
  styleUrls: ['./lister-conducteur.component.css']
})
export class ListerConducteurComponent implements OnInit {
  c!: Conducteur[];
  constructor(private service: ConducteurService) { }

  ngOnInit(): void {
   this.getallcar() 
  }
  getallcar() {
    this.service.getConducteurs().subscribe(
      response => {
        this.c = response;
        console.log(response)
      },
      err => {
        console.log(err);
      });
  }

}
