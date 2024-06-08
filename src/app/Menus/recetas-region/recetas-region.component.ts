import { Component } from '@angular/core';


interface Receta {
  nombre: string;
  imagen: string;
  descripcion: string;
  receta: string;
}

interface Region {
  nombre: string;
  imagen: string;
  descripcion: string;
  recetas: Receta[];
}

@Component({
  selector: 'app-recetas-region',
  templateUrl: './recetas-region.component.html',
  styleUrls: ['./recetas-region.component.css']
})



export class RecetasRegionComponent {

  regiones: Region[] = [
    {
      nombre: 'Costa',
      imagen: 'assets/Regiones/Costa.jpg',
      descripcion: 'La región costera del Ecuador, conocida por sus hermosas playas y su rica gastronomía marina.',
      recetas: [
        {
          nombre: 'Ceviche',
          imagen: 'assets/Platos/ceviche.jpg',
          descripcion: 'Delicioso ceviche de camarones típico de la costa ecuatoriana.',
          receta: 'Ingredientes y pasos para preparar el ceviche.'
        },
        {
          nombre: 'Encebollado',
          imagen: 'assets/Platos/Encebollado.jpg',
          descripcion: 'Sopa de pescado con yuca, muy popular en la costa.',
          receta: 'Ingredientes y pasos para preparar el encebollado.'
        }
      ]
    },
    {
      nombre: 'Sierra',
      imagen: 'assets/Regiones/Sierra.jpg',
      descripcion: 'La región andina del Ecuador, famosa por sus paisajes montañosos y platos tradicionales.',
      recetas: [
        {
          nombre: 'Llapingachos',
          imagen: 'assets/Platos/llapingachos.jpg',
          descripcion: 'Tortillas de papa rellenas de queso, típicas de la sierra.',
          receta: 'Ingredientes y pasos para preparar llapingachos.'
        },
        {
          nombre: 'Hornado',
          imagen: 'assets/Platos/hornado.jpg',
          descripcion: 'Cerdo asado con mote, muy popular en la región andina.',
          receta: 'Ingredientes y pasos para preparar hornado.'
        }
      ]
    },
    {
      nombre: 'Amazonía',
      imagen: 'assets/Regiones/Amazonia.jpg',
      descripcion: 'La región amazónica del Ecuador, hogar de una biodiversidad increíble y recetas exóticas.',
      recetas: [
        {
          nombre: 'Maito',
          imagen: 'assets/Platos/maito.jpg',
          descripcion: 'Pescado envuelto en hojas de bijao y asado, típico de la Amazonía.',
          receta: 'Ingredientes y pasos para preparar maito.'
        },
        {
          nombre: 'Chontacuro',
          imagen: 'assets/Platos/chontacuro.jpg',
          descripcion: 'Gusano de chonta, una delicia amazónica.',
          receta: 'Ingredientes y pasos para preparar chontacuro.'
        }
      ]
    },
    {
      nombre: 'Insular',
      imagen: 'assets/Regiones/Insular.jpg',
      descripcion: 'La región insular del Ecuador, conocida por las islas Galápagos y su cocina marinera.',
      recetas: [
        {
          nombre: 'Langosta',
          imagen: 'assets/Platos/langosta.jpg',
          descripcion: 'Langosta fresca de las islas Galápagos.',
          receta: 'Ingredientes y pasos para preparar langosta.'
        },
        {
          nombre: 'Sopa marinera',
          imagen: 'assets/Platos/sopa_marinera.jpg',
          descripcion: 'Sopa de mariscos típica de la región insular.',
          receta: 'Ingredientes y pasos para preparar sopa marinera.'
        }
      ]
    }
  ];

  selectedRegion: Region | null = null;
  selectedReceta: Receta | null = null;

  toggleRecetas(region: Region) {
    this.selectedRegion = this.selectedRegion === region ? null : region;
  }

  selectReceta(receta: Receta) {
    this.selectedReceta = receta;
  }

  closeRegion() {
    this.selectedRegion = null;
  }

  closeReceta() {
    this.selectedReceta = null;
  }

}
