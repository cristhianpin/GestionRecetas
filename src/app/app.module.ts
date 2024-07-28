import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './PreLogueo/login/login.component';
import { AcercaDeComponent } from './PreLogueo/acerca-de/acerca-de.component';
import { FooterComponent } from './footer/footer.component';
import { RecetasRegionComponent } from './Menus/recetas-region/recetas-region.component';
import { RegistroComponent } from './registro/registro.component';
import { HeadermenuComponent } from './Menus/headermenu/headermenu.component';
import { PopularesComponent } from './Menus/populares/populares.component';
import { HeaderControladorComponent } from './PreLogueo/header-controlador/header-controlador.component';
import { MenuRecetasComponent } from './Menus/menu-recetas/menu-recetas.component';
import { VistaRecetasComponent } from './VistaAdmin/vista-recetas/vista-recetas.component';
import { HeaderadminComponent } from './VistaAdmin/headeradmin/headeradmin.component';
import { RegistraclientesComponent } from './VistaAdmin/registraclientes/registraclientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AcercaDeComponent,
    FooterComponent,
    RecetasRegionComponent,
    RegistroComponent,
    HeadermenuComponent,
    PopularesComponent,
    HeaderControladorComponent,
    MenuRecetasComponent,
    VistaRecetasComponent,
    HeaderadminComponent,
    RegistraclientesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
