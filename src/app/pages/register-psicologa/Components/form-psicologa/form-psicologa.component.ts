import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { PsicologosService } from '../../Services/psicologos.service';
import { PsicologosInterface, PsicologosInterfacePost } from '../../Models/psicologos-interface';
import { DoCheck } from '@angular/core';
@Component({
  selector: 'app-form-psicologa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-psicologa.component.html',
  styleUrl: './form-psicologa.component.css'
})
export class FormPsicologaComponent implements OnInit{
  psicologasCatalogo:PsicologosInterface[]=[];
  psicologos:FormGroup;
  dataUpdate = {nombre : "",apellido : "",telefono : "",email : "", aniosExperiencia : 0,especialiad : ""}
  nombre: string = ""
  apellido: string = ""
  telefono: string = ""
  email: string = ""
  anios: string = ""
  especialiadad: string = ""

  btnActualizar: boolean = false;
  btnAgregar: boolean = true;
  btncancelar: boolean = false;

  idPsicologa:number=0;

  cancelar() {
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.email = '';
    this.anios = '';
    this.especialiadad = '';
    this.btnActualizar = false;
    this.btnAgregar = true;
    this.btncancelar = false;
  }

  telefonoLoingitud(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
  }

  aniosLogintud(event: any) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(0, 2);
  }

  iconBtnUpdate(i:number, id:number){
    this.nombre = this.psicologasCatalogo[i].nombre;
    this.apellido = this.psicologasCatalogo[i].apellido;
    this.telefono = this.psicologasCatalogo[i].telefono;
    this.email = this.psicologasCatalogo[i].email;
    this.anios = this.psicologasCatalogo[i].aniosExperiencia;
    this.especialiadad = this.psicologasCatalogo[i].especialidad;
  
    this.btnActualizar = true;
    this.btnAgregar = false;
    this.btncancelar = true;

    this.idPsicologa = id;
  }
  
  constructor(private psicologosService: PsicologosService) {
    this.psicologos = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniosExperiencia: new FormControl(parseInt(""), Validators.required),
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


  update() {
      console.log(this.psicologos.value);
      alert(this.idPsicologa)
      this.psicologosService.updatePsicologos(this.idPsicologa,this.psicologos.value).pipe(tap({
        next(response) {
          console.log(response);
          if(response.status && response.data != null) {
            alert("SE ACTUALIZO LA INFORMACION")
          }
        },
        error(err) {
          console.log(err);
          alert("Hubo un error.")
        }
      })).subscribe()
  } 

  deleted(i:number){
    this.btnAgregar = true;
    this.btncancelar = false;
    this.btnActualizar = false;

    alert(i)
    this.psicologosService.deletedPsicologos(i).subscribe(
      (data) => {
        console.log(data)
        alert("se elimino la id"+i)
      },
      (error) =>
        console.log("no jalo la api", error)
    )
  }
}
