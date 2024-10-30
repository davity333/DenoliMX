import { Component } from '@angular/core';
import { FormLoginComponent } from './Components/form-login/form-login.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
