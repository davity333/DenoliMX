import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DenunciaInterface } from '../../../realizar-denuncia/models/denuncia-interface';
import { DenunciaService } from '../../../realizar-denuncia/Services/denuncia.service';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CuadroModalComponent } from '../cuadro-modal/cuadro-modal.component';
@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [CommonModule, CuadroModalComponent],
  templateUrl: './denuncias.component.html',
  styleUrl: './denuncias.component.css'
})
export class DenunciasComponent implements OnInit{

  denunciaInterfaces : DenunciaInterface[]=[];
  modal:boolean = true;
  constructor(private denunciaService: DenunciaService){}

  ngOnInit(): void {
    this.denunciaService.getComplaint().pipe(tap({
      next:(response) =>{
        if(response ){
          this.denunciaInterfaces = response;
          console.log("AQUI SE JALA LA API"+ this.denunciaService)
              
          }
        },
        error: (err) => {
          console.error(err);
        }
      })).subscribe();
  }

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}
