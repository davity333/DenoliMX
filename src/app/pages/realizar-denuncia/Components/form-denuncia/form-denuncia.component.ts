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
import Swal from 'sweetalert2'
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
  numeroAleatorio:number=0;

  constructor(private categoriaService: CategoriaService, private companyService: CompanyServiceService, private denunciaService: DenunciaService){
    this.numeroAleatorio = denunciaService.generateCode();
    this.denunciaGroup = new FormGroup({
      ubicacion: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      evidencia: new FormControl(null),
      fecha: new FormControl('', Validators.required),
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
    this.numeroAleatorio = this.denunciaService.generateCode();
    if(this.denunciaGroup.valid){
    const dataDenuncia:DenunciaInterface = {
      ubicacion: this.denunciaGroup.value.ubicacion,
      descripcion: this.denunciaGroup.value.descripcion,
      lugarDemandar: this.denunciaGroup.value.nombreEmpresa,
      fecha: this.denunciaGroup.value.fecha,
      evidencia: this.denunciaGroup.value.evidencia,
      tipoDenuncia: this.tipoDenuncia,
      codigo: this.numeroAleatorio,
    };

    this.denunciaService.createComplaint(dataDenuncia).pipe(tap({
      next(response) {
        console.log(response);
        if (response.status) {
          Swal.fire({
            title: "Denuncia realizada con éxito",
            text: `Tu denuncia ha sido enviada a la empresa ${dataDenuncia.lugarDemandar}. Espera a recibir un mensaje de las autoridades para recibir información sobre tu denuncia.`,
            icon: "success"
          }).then(() => {
            return Swal.fire(`Código generado: ${dataDenuncia.codigo}. Recuerda tener este código para poder recibir información y noticias de tu denuncia en la sección de Notificaciones de denuncia en la vista principal.`);
          });
        }
      },
      error(err) {
        console.log(err);
        alert("Hubo un error.");
      },
    })).subscribe();
    
      }else
      alert("datos incompletos" + this.denunciaGroup.value.evidencia)
  }
}
