import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './PreLogueo/login/login.component';
import { AcercaDeComponent } from './PreLogueo/acerca-de/acerca-de.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'AcercaDe', component: AcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
