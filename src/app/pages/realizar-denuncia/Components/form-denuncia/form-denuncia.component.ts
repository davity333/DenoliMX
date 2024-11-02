import { Component } from '@angular/core';
import { CategoriaService } from '../../../home/Services/categoria.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyServiceService } from '../../../register-company/Services/company-service.service';
import { tap } from 'rxjs';
import { PsicologosInterface } from '../../../register-psicologa/Models/psicologos-interface';
import { CompanyRegister } from '../../../register-company/Models/company-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-denuncia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-denuncia.component.html',
  styleUrl: './form-denuncia.component.css'
})
export class FormDenunciaComponent implements OnInit{

  constructor(private categoriaService: CategoriaService, private companyService: CompanyServiceService){}
  companiasNames: CompanyRegister []= [];
  categoria: string = "";

  ngOnInit(): void {
      this.categoria = this.categoriaService.getCategoria();

      this.companyService.getCompanys().pipe(tap({
        next: (response) => {
          if(response.status && response.data != null){
            this.companiasNames = response.data; 
            console.log(this.companiasNames);
          }
        },
        error: (err) => {
          console.error(err);
        }
      })).subscribe()
  }

  createDenuncia(){

  }
}
