import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
    crimens = [
    { value: 'Robo', label: 'Robo' },
    { value: 'Violencia domestica', label: 'Violencia doméstica' },
    { value: 'Acoso sexual', label: 'Acoso sexual' },
    { value: 'Fraude o estafa', label: 'Fraude o estafa' },
    { value: 'Delitos ciberneticos', label: 'Delitos cibernéticos' },
    { value: 'Vandalismo', label: 'Vandalismo' },
    { value: 'Narcotrafico o consumo de drogas', label: 'Narcotráfico o consumo de drogas' },
    { value: 'Desaparicion de personas', label: 'Desaparición de personas' },
    { value: 'Abuso de autoridad', label: 'Abuso de autoridad' },
    { value: 'Corrupcion', label: 'Corrupción' },
    { value: 'Maltrato animal', label: 'Maltrato animal' },
    { value: 'Amenazas', label: 'Amenazas' },
    { value: 'Contaminacion ambiental', label: 'Contaminación ambiental' }
];

hoverFoto: string = './assets/signo.png';

  cambioImagen() {
    this.hoverFoto = './assets/denunciamano.png';
  }

  regresoImagen() {
    this.hoverFoto = './assets/signo.png';
  }
}
