import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './PreLogueo/login/login.component';
import { AcercaDeComponent } from './PreLogueo/acerca-de/acerca-de.component';
import { RegistroComponent } from './registro/registro.component';
import { PopularesComponent } from './Menus/populares/populares.component';
import { RecetasRegionComponent } from './Menus/recetas-region/recetas-region.component';
import { MenuRecetasComponent } from './Menus/menu-recetas/menu-recetas.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'AcercaDe', component: AcercaDeComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'MenuRecetas', component: MenuRecetasComponent },
  {path: 'Populares', component: PopularesComponent},
  {path: 'Regiones', component: RecetasRegionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
