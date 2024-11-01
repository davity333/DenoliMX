import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { GraficasComponent } from './Components/graficas/graficas.component';
import { PsicologiaComponent } from './Components/psicologia/psicologia.component';
import { MensajeComponent } from './Components/mensaje/mensaje.component';
import { UsersService } from '../../auth/users.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, IntroductionComponent, GraficasComponent, PsicologiaComponent, MensajeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
