import { Component } from '@angular/core';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent {
  items = [
    {
      image: 'assets/Mas Populares/Guatita.jpg',
      title: 'Guatita',
      content: 'La guatita es un plato tradicional y popular de la gastronomía ecuatoriana, especialmente apreciado en la región de la costa y la sierra. Se elabora principalmente con mondongo (callos de res) cocidos y cortados en pequeños trozos.',
      moreInfo: 'Información adicional sobre el recuadro 1.'
    },
    {
      image: 'assets/Mas Populares/Encebollado.jpg',
      title: 'Encebollado',
      content: 'El encebollado es un plato tradicional de la cocina ecuatoriana, especialmente popular en la región costera. Se trata de un sabroso y reconfortante caldo de pescado, típicamente elaborado con atún fresco.',
      moreInfo: 'Información adicional sobre el recuadro 2.'
    },
    {
      image: 'assets/Mas Populares/Ceviche.jpg',
      title: 'Ceviche',
      content: 'El ceviche ecuatoriano es un plato refrescante y sabroso, muy popular en la costa del país. A diferencia de otras versiones de ceviche en América Latina, el ceviche ecuatoriano se caracteriza por su jugosidad, ya que se prepara con una base de jugo de limón y, a menudo, con un poco de jugo de tomate.',
      moreInfo: 'Información adicional sobre el recuadro 3'
    },
    {
      image: 'assets/Mas Populares/SecoPollo.jpg',
      title: 'Seco de Pollo',
      content: 'El seco de pollo es un plato emblemático de la cocina ecuatoriana, conocido por su sabor robusto y sus ingredientes aromáticos. Se trata de un guiso de pollo que se cocina lentamente en una salsa rica y especiada.',
      moreInfo: 'Información adicional sobre el recuadro 4.'
    },
    {
      image: 'assets/Mas Populares/Bolones.jpg',
      title: 'Bolones',
      content: 'Los bolones de queso y mixto son un desayuno tradicional y popular en Ecuador, especialmente en la región costera. Los bolones se preparan a partir de plátanos verdes, que se cocinan y luego se aplastan hasta formar una masa.',
      moreInfo: 'Información adicional sobre el recuadro 5.'
    }
  ];
  // Variable para seguir el estado de cada modal
  modalStates: boolean[] = [];constructor() {
    // Inicializar el estado de los modales
    this.items.forEach(_ => this.modalStates.push(false));
  }

  // Método para abrir un modal específico
  openModal(index: number): void {
    const modal = document.getElementById('infoModal' + index);
    if (modal) {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  // Método para cerrar un modal específico
  closeModal(index: number): void {
    const modal = document.getElementById('infoModal' + index);
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  }
}
