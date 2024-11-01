import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../Services/categoria.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

  constructor(private categoria: CategoriaService){}
  @ViewChild('mySelect') mySelect!: ElementRef<HTMLSelectElement>;

hoverFoto: string = './assets/signo.png';
  cambioImagen() {
    this.hoverFoto = './assets/denunciamano.png';
  }

  regresoImagen() {
    this.hoverFoto = './assets/signo.png';
  }

  mandarCategoria(): void {
    const categoria = this.mySelect.nativeElement.value;
    this.categoria.setCategoria(categoria);
  }

}
