import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLogin } from '../../Models/user-register';
import { UsersService } from '../../../../auth/users.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  login : FormGroup;
  
  constructor(private usuario:UsersService, private navegar : Router){
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.email]), // Aplicar Validators.email a email
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    });
  }


  loguear() {
    if (this.login.valid) {
      this.usuario.validateUser(this.login.value).pipe(
        tap({
          next: (response) => {  
            console.log(response);
            if (response.status) {
              alert("Usuario buscado y logueado");
              this.usuario.generateId(this.login.value.email).subscribe({
                next: (userId) => {
                    console.log("ID guardada en localStorage:", userId);
                    // Navega después de que se guarda el ID
                    this.navegar.navigate(['']);
                },
                error: (err) => {
                    console.error("Error al obtener la ID:", err);
                }
            });

            }
          },
          error: (err) => {
            console.log(err);
            alert("Datos incorrectos.");
          },
        })
      ).subscribe();
    } else {
      alert("datos incompletos");
    }
  }
}
