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
        image: '../../../assets/service-card.svg',
        title: 'Vitrificação de Pintura',
        description: 'Aplicação de uma camada protetora de cerâmica líquida, que aumenta a resistência da pintura contra riscos, sujeira e agentes climáticos.',
        link: '#'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Serviço 2',
        description: 'Descrição do serviço 2. O melhor tratamento para o seu veículo.',
        link: '#'
      },
      {
        image: 'https://via.placeholder.com/150',
        title: 'Serviço 3',
        description: 'Descrição do serviço 3. Garantimos qualidade e eficiência.',
        link: '#'
      }
    ];

  }

  ngOnInit(): void {
  }

}
