import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conducteur } from 'src/app/Models/Conducteur';
import { ConducteurService } from 'src/app/Services/conducteur.service';
import { ListerConducteurComponent } from '../lister-conducteur/lister-conducteur.component';

@Component({
  selector: 'app-ajouter-conducteur',
  templateUrl: './ajouter-conducteur.component.html',
  styleUrls: ['./ajouter-conducteur.component.css']
})
export class AjouterConducteurComponent implements OnInit {
  myform: FormGroup;
  message!: String;
  constructor(private service: ConducteurService, private fb: FormBuilder,private route: Router) {
    let formControls = {
      //id: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
    };
    this.myform = this.fb.group(formControls);
   }
   
   conducteur! : Conducteur;
  ngOnInit(): void {
  }

  saveConducteur() {

    this.service.AddConducteur(this.myform.value).subscribe(
      resp => {
        this.conducteur=this.myform.value;
        console.log(this.conducteur)
        this.message = "Success !";
        this.route.navigateByUrl("/allConducteur")

      },
      error => {
        console.log(error);
        this.message = 'error';
      }
    );
  }


}
