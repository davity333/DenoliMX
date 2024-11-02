import { Component } from '@angular/core';
import { DenunciasComponent } from './Components/denuncias/denuncias.component';
import { HeaderComponent } from '../home/Components/header/header.component';
import { CuadroModalComponent } from './Components/cuadro-modal/cuadro-modal.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-denuncias-recibidas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, DenunciasComponent, CuadroModalComponent],
  templateUrl: './denuncias-recibidas.component.html',
  styleUrl: './denuncias-recibidas.component.css'
})
export class DenunciasRecibidasComponent {

}
