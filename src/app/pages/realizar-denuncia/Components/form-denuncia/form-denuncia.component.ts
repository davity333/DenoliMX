import { Component } from '@angular/core';
import { CategoriaService } from '../../../home/Services/categoria.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-form-denuncia',
  standalone: true,
  imports: [],
  templateUrl: './form-denuncia.component.html',
  styleUrl: './form-denuncia.component.css'
})
export class FormDenunciaComponent implements OnInit{

  constructor(private categoriaService: CategoriaService){}

  categoria: string = "";

  ngOnInit(): void {
      this.categoria = this.categoriaService.getCategoria();
  }

  
}
