import { Component } from '@angular/core';
import { menu_receta } from '../../menu_receta';

@Component({
  selector: 'app-menu-recetas',
  templateUrl: './menu-recetas.component.html',
  styleUrls: ['./menu-recetas.component.css']
})
export class MenuRecetasComponent {
  listaRecetas: menu_receta[] = [
    new menu_receta(1, 'Bolon','','', 'assets/menu_recetas/bolon.png', '/assets/menu_recetas/bolon.html'),
    new menu_receta(2, 'Ceviche de camarón','','', '../assets/menu_recetas/ceviche.png', '/assets/menu_recetas/ceviche.html'),
    new menu_receta(3, 'Encebollado','','', '../assets/menu_recetas/encebollado.png', '/assets/menu_recetas/encebollado.html'),
    new menu_receta(4, 'Encocado de pescado','','', '../assets/menu_recetas/encocado.png', '/assets/menu_recetas/encocado.html'),
    new menu_receta(5, 'Guatita','','', '../assets/menu_recetas/guatita.png', ''),
    new menu_receta(6, 'Seco de pollo','','', '../assets/menu_recetas/seco.png', ''),
    new menu_receta(7, 'Seco de chivo','','', '../assets/menu_recetas/seco.png', ''),
    new menu_receta(8, 'LLapingacho','','', '../assets/menu_recetas/llapingacho.png', ''),
    new menu_receta(9, 'Caldo de bola','','', '../assets/menu_recetas/caldo.png', ''),
  ];

  verMas(url: string): void {
    window.location.href = url;
  }
}
