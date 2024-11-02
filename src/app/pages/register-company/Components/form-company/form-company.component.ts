import { Component } from '@angular/core';
import { HeaderComponent } from '../../../home/Components/header/header.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { CompanyServiceService } from '../../Services/company-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-company',
  standalone: true,
  imports: [HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './form-company.component.html',
  styleUrl: './form-company.component.css'
})
export class FormCompanyComponent {
    company :  FormGroup;
    id:number=0
    

    constructor(private empresa:CompanyServiceService, private navegar : Router){
      this.id = Number(localStorage.getItem("id"));
      this.company = new FormGroup({
        nombre: new FormControl('', Validators.required),
        duenio: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        ubicacion: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        codigo: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        horario: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20),]),
      });
    }

    agregarEmpresa(){
        if(this.company.valid ){
          const empresaData = {
            nombreEmpresa: this.company.value.nombre,
            nombreDueno: this.company.value.duenio,
            ubicacion: this.company.value.ubicacion,
            cp: this.company.value.codigo,
            horario: this.company.value.horario,
            imagen: "",
            user_idUser: this.id 
        };
        console.log("Datos de la empresa a agregar:", empresaData);
          this.empresa.createCompany(empresaData).pipe(tap({
            next(response) {
                console.log(response);
                if(response.status && response.data != null) {
                  alert("SE AGREGO LA EMPRESA")
                }
            },
            error(err) {
              console.log(err);
                alert("Hubo un error.")
            },
          })).subscribe()
        }
      }
}
