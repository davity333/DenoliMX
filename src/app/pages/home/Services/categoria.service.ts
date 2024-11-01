import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categoria:string='';

  setCategoria(denuncia:string){
    this.categoria = denuncia;
  }

  getCategoria(){
    return this.categoria;
  }
}
