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
        image: '../../../assets/lavagem-completa.webp',
        title: 'Lavagem Detalhada',
        description: 'Limpeza completa do veículo, incluindo bancos, carpetes e motor. Seu carro como novo! Limpeza interna e externa impecável.',
        // link: '#'
      },
      {
        image: '../../../assets/lavagem-normal.webp',
        title: 'Lavagem convencional',
        description: 'Limpeza rápida e eficiente da lataria e vidros do seu carro. Mantenha seu carro sempre limpo com nossa lavagem convencional.',
        // link: '#'
      },

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
        title: 'Higienização Interna',
        description: 'Aplicação de um produto que protege os tecidos e couro contra manchas e sujeiras, facilitando a limpeza e prolongando a vida útil dos materiais.',
        // link: '#'
      },


      {
        image: '../../../assets/lavagem-motor.webp',
        title: 'Lavagem de Motor',
        description: 'Limpeza do motor, removendo sujeira e aumentando a vida útil. Deixa o motor do seu carro brilhando e protegido contra corrosão.',
      },
      {
        image: '../../../assets/chassi.webp',
        title: 'Lavagem de Chassi',
        description: 'Protege o chassi contra ferrugem e prolonga a vida útil do seu veículo. Limpeza completa do chassi, removendo terra e resíduos.',
        // link: '#'
      },
    ];

  }

  ngOnInit(): void {
  }

  public goToServices(): void { }

  public wppMessageOptions(option: any) {

    const phoneNumber: string = '5511973752898'

    switch (option) {
      case 'Vitrificação de Pintura':
        window.open(
          `https://wa.me/${phoneNumber}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Vitrifica%C3%A7%C3%A3o%20de%20Pintura!`, "_blank"
        );
        break;
      case 'Polimento Automotivo':
        window.open(
          `https://wa.me/${phoneNumber}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20Polimento%20Automotivo!`, "_blank"
        );
        break;
      case 'Higienização Interna':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Higienização%20Interna!`, "_blank"
        );
        break;

      case 'Lavagem de Motor':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20de%20Motor!`, "_blank"
        );
        break;
      case 'Lavagem de Chassi':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20de%20Chassi!`, "_blank"
        );
        break;
      case 'Lavagem Detalhada':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20Detalhada!`, "_blank"
        );
        break;
      case 'Lavagem convencional':
        window.open(
          `https://wa.me/${phoneNumber}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20Lavagem%20convencional!`, "_blank"
        );
        break;
      default:
        break;
    }
  }

}
