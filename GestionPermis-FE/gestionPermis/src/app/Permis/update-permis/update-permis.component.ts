import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conducteur } from 'src/app/Models/Conducteur';
import { Permis ,Type} from 'src/app/Models/Permis';
import { ConducteurService } from 'src/app/Services/conducteur.service';
import { PermisService } from 'src/app/Services/permis.service';

@Component({
  selector: 'app-update-permis',
  templateUrl: './update-permis.component.html',
  styleUrls: ['./update-permis.component.css']
})
export class UpdatePermisComponent implements OnInit {
  myform: FormGroup;
  message!: String;
  permis !: Permis;
  conducteurs!: Conducteur[];
  types!: Array<string>;
  conducteur!:Conducteur;
  idConducteur!:any;
  dateEmission!:any;
  dateExpiration!:any;
  
  constructor(private service: PermisService, private serviceConducteur:ConducteurService ,private fb: FormBuilder,private route: Router,
    private datePipe: DatePipe, private activatedRoute:ActivatedRoute) { 
    let formControls = {
      type: new FormControl("", [Validators.required]),
      dateEmission: new FormControl('', [Validators.required]),
      dateExpiration: new FormControl('', [Validators.required]),
      points: new FormControl('', [Validators.required]),
      conducteur: new FormControl('', [Validators.required]),
    };

    this.types = Object.keys(Type).filter(key => isNaN(+key));
    this.myform = this.fb.group(formControls);
   }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.getAllConducteurs()
    
  this.service.get1Permis(id).subscribe({
    next:(res)=>{
      this.permis=res
      this.dateEmission = this.datePipe.transform(this.permis.dateEmission,'yyyy-MM-dd')
      this.dateExpiration = this.datePipe.transform(this.permis.dateExpiration,'yyyy-MM-dd')
    },
    error:err=>{
      console.log(err);
    }})
}


 OnupdatePermis()
 {
  this.permis.conducteur = this.conducteur
  this.permis.dateEmission = this.myform.value.dateEmission
  this.permis.dateExpiration = this.myform.value.dateExpiration
  this.permis.points = this.myform.value.points
  this.permis.type = this.myform.value.type
  console.log(this.permis.conducteur)
  this.service.UpdatePermis(this.permis).subscribe({
    next:data=>{
    alert("mise a jour effectuée avec succes");
    this.route.navigateByUrl("/allPermis")
   },
   error:err=>{console.log(err)}})
   
  }
  getConducteur(id : string){
    this.serviceConducteur.get1Conducteur(id).subscribe({
      next:res=>{
        this.conducteur=res;
       
      },
      error:error=>{
        this.message=error
      }
      
    })
  }
  selectChangeHandler(event: any) {
    this.idConducteur = event.target.value;
    this.getConducteur(this.idConducteur);
  }
  getAllConducteurs(){
    this.serviceConducteur.getConducteurs().subscribe({
      next:resp=>{
        this.conducteurs=resp;
        return this.conducteur
      },
      error:error=>{
        this.message= error;
      }
    })
  }
}