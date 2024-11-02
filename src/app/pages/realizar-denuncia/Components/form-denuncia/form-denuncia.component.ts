import { Component } from '@angular/core';
import { CategoriaService } from '../../../home/Services/categoria.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyServiceService } from '../../../register-company/Services/company-service.service';
import { tap } from 'rxjs';
import { DenunciaService } from '../../Services/denuncia.service';
import { CompanyRegister } from '../../../register-company/Models/company-register';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DenunciaInterface } from '../../models/denuncia-interface';
@Component({
  selector: 'app-form-denuncia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-denuncia.component.html',
  styleUrl: './form-denuncia.component.css'
})
export class FormDenunciaComponent implements OnInit{
  denunciaGroup: FormGroup;
  companiasNames: CompanyRegister []= [];
  tipoDenuncia: string = "";
  denunciaInterface: DenunciaInterface[]=[];

  constructor(private categoriaService: CategoriaService, private companyService: CompanyServiceService, private denunciaService: DenunciaService){
    this.denunciaGroup = new FormGroup({
      ubicacion: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      evidencia: new FormControl(null),
      nombreEmpresa: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
      this.tipoDenuncia = this.categoriaService.getCategoria();
    console.log("la denuncia que elegistes fue="+this.tipoDenuncia)

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

  createDenuncia():void{
    if(this.denunciaGroup.valid){
    const dataDenuncia:DenunciaInterface = {
      ubicacion: this.denunciaGroup.value.ubicacion,
      descripcion: this.denunciaGroup.value.descripcion,
      lugarDemandar: this.denunciaGroup.value.nombreEmpresa,
      evidencia: this.denunciaGroup.value.evidencia,
      tipoDenuncia: this.tipoDenuncia
    };

        this.denunciaService.createComplaint(dataDenuncia).pipe(tap({
          next(response){
            console.log(response);
            if(response.status){
              alert("Denuncia creada correctamente");
            }
          },
          error(err) {
            console.log(err);
              alert("Hubo un error.")
          },
        })).subscribe()
      }else
      alert("datos incompletos" + this.denunciaGroup.value)
  }
}
