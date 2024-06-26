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
import { HeaderControladorComponent } from './Prelogueo/header-controlador/header-controlador.component';
import { MenuRecetasComponent } from './Menus/menu-recetas/menu-recetas.component';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
