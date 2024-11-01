import { Component } from '@angular/core';
import { FormCompanyComponent } from './Components/form-company/form-company.component';
import { HeaderComponent } from '../home/Components/header/header.component';
@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [FormCompanyComponent, HeaderComponent],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {

}
