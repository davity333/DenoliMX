import { Component } from '@angular/core';
import { FormDenunciaComponent } from './Components/form-denuncia/form-denuncia.component';
import { HeaderComponent } from "../home/Components/header/header.component";
@Component({
  selector: 'app-realizar-denuncia',
  standalone: true,
  imports: [FormDenunciaComponent, HeaderComponent],
  templateUrl: './realizar-denuncia.component.html',
  styleUrl: './realizar-denuncia.component.css'
})
export class RealizarDenunciaComponent {

}
