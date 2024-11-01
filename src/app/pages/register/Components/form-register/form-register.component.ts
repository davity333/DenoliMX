import { Component } from '@angular/core';
import { UsersService } from '../../../../auth/users.service';
import { UserRegister } from '../../../login/Models/user-register';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

export class FormRegisterComponent {
  registro:FormGroup;
  
  constructor(private usuario:UsersService){
    this.registro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    });
  }

  registrarse(){
        if(this.registro.valid ){
        this.usuario.createUser(this.registro.value).pipe(tap({
          next(response) {
              console.log(response);
              if(response.status) {
                alert("Todo esta bien y se agrego")
                
              }
          },
          error(err) {
            console.log(err);
            
              alert("Hubo un error.")
          },
        })).subscribe()
      }else{
        alert("falta el nombre")
      }
  }
}