import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public cards: Array<any> = []
  constructor() {
    this.cards = [
      {
        image: '../../../assets/card1.svg',
        title: 'Vitrificação de Pintura',
        description: 'Aplicação de uma camada protetora de cerâmica líquida, que aumenta a resistência da pintura contra riscos, sujeira e agentes climáticos.',
        // link: '#'
      },
      {
        image: '../../../assets/card2.svg',
        title: 'Polimento Automotivo',
        description: 'Restauração do brilho da pintura, removendo pequenos riscos e imperfeições para um acabamento liso e reluzente.',
        // link: '#'
      },
      {
        image: '../../../assets/card3.svg',
        title: 'Impermeabilização de Estofados',
        description: 'Aplicação de um produto que protege os tecidos e couro contra manchas e sujeiras, facilitando a limpeza e prolongando a vida útil dos materiais.',
        // link: '#'
      }
    ];

  }

  ngOnInit(): void {
  }

}
