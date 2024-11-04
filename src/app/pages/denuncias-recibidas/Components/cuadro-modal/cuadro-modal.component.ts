import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajeService } from '../../Controllers/mensaje.service';
import { tap } from 'rxjs';
import { MensajeInterface } from '../../Models/mensaje-interface';
@Component({
  selector: 'app-cuadro-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuadro-modal.component.html',
  styleUrl: './cuadro-modal.component.css'
})
export class CuadroModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() codigoDenuncia:number = 0;

  messagesForm: FormGroup;

  close() {
    this.closeModal.emit();
  }

  constructor(private mensaje:MensajeService){
    this.messagesForm = new FormGroup({
      nombreAutoridad: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required),
    });
  }

  enviarMensaje() {
    const mensajeData: MensajeInterface={
      nombreAutoridad: this.messagesForm.value.nombreAutoridad,
      mensaje: this.messagesForm.value.mensaje,
      codigo: this.codigoDenuncia
    }
    if(this.messagesForm.valid){
      this.mensaje.createMessage(mensajeData).pipe(tap({
        next(response){
          console.log(response);
          if(response.status){
            alert("El mensaje fue enviado correctamente");

          }
        },
        error(err){
          console.log("Algo salio mal");
        }
      })).subscribe()
    }else{
      alert("Campos incompletos")
    }
    
  }

}
