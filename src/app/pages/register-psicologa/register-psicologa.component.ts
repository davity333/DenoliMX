import { Component } from '@angular/core';
import { FormPsicologaComponent } from './Components/form-psicologa/form-psicologa.component';
import { HeaderComponent } from '../home/Components/header/header.component';
@Component({
  selector: 'app-register-psicologa',
  standalone: true,
  imports: [HeaderComponent, FormPsicologaComponent],
  templateUrl: './register-psicologa.component.html',
  styleUrl: './register-psicologa.component.css'
})
export class RegisterPsicologaComponent {

}
