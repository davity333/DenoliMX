import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cuadro-modal',
  standalone: true,
  imports: [],
  templateUrl: './cuadro-modal.component.html',
  styleUrl: './cuadro-modal.component.css'
})
export class CuadroModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
