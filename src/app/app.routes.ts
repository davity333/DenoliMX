import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { RealizarDenunciaComponent } from './pages/realizar-denuncia/realizar-denuncia.component';
import { RegisterPsicologaComponent } from './pages/register-psicologa/register-psicologa.component';
export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"registerCompany", component:RegisterCompanyComponent},
    {path:"registerComplaint", component:RealizarDenunciaComponent},
    {path:"registerPsicologa", component:RegisterPsicologaComponent}
];
