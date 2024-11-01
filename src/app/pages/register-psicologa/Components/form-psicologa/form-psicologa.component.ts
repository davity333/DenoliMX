import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { PsicologosService } from '../../Services/psicologos.service';
import { PsicologosInterface } from '../../Models/psicologos-interface';
@Component({
  selector: 'app-form-psicologa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-psicologa.component.html',
  styleUrl: './form-psicologa.component.css'
})
export class FormPsicologaComponent implements OnInit{
  psicologasCatalogo:PsicologosInterface[]=[];
  
  nombre: string = ""
  psicologos:FormGroup;
  psicologasJSON = JSON.stringify(this.psicologasCatalogo)
  
  constructor(private psicologosService: PsicologosService) {
    this.psicologos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniosExperiencia: new FormControl('', Validators.required),
      especialidad: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.psicologosService.getPsicologos().subscribe(
      (data) => {
        this.psicologasCatalogo = data;
        console.log("Datos de la API:", data);
      },
      (error) => {
        console.log("No se pudo obtener la API:", error);
      }
    );
  }

  agregarPsicologo(){
      if(this.psicologos.valid){
        this.psicologosService.createPsicologo(this.psicologos.value).pipe(tap({
          next(response){
            console.log(response)
            if(response){
              alert("se añadio el psicologo"+response)
            }
            
          },
          error(err){
            console.log("Algo salio mal")
          }
        })).subscribe()
  }else{
    alert("Campos incompletos")
  }
}
}
