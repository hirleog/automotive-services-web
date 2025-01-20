import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public alertMessage: string | null = null;
  public showAlert: boolean = false;

  public cards: Array<Product> = []
  public alertIndicator: boolean = false;

  constructor(private cartService: CartService) {
    // this.cards = [
    //   {
    //     id: 1,
    //     image: '../../../assets/lavagem-completa.webp',
    //     title: 'Lavagem Detalhada',
    //     description: 'Limpeza completa do veículo, incluindo bancos, carpetes e motor. Seu carro como novo! Limpeza interna e externa impecável.',
    //     price: 150.87,
    //     quantity: 1
    //   },
    //   {
    //     id: 2,
    //     image: '../../../assets/lavagem-normal.webp',
    //     title: 'Lavagem convencional',
    //     description: 'Limpeza rápida e eficiente da lataria e vidros do seu carro. Mantenha seu carro sempre limpo com nossa lavagem convencional.',
    //     price: 250,
    //     quantity: 1
    //   },

    //   {
    //     id: 3,
    //     image: '../../../assets/vitrificacao.webp',
    //     title: 'Vitrificação de Pintura',
    //     description: 'Aplicação de uma camada protetora de cerâmica líquida, que aumenta a resistência da pintura contra riscos, sujeira e agentes climáticos.',
    //     price: 450,
    //     quantity: 1
    //   },
    //   {
    //     id: 4,
    //     image: '../../../assets/mini.webp',
    //     title: 'Polimento Automotivo',
    //     description: 'Restauração do brilho da pintura, removendo pequenos riscos e imperfeições para um acabamento liso e reluzente.',
    //     price: 500,
    //     quantity: 1
    //   },
    //   {
    //     id: 5,
    //     image: '../../../assets/card3.webp',
    //     title: 'Higienização Interna',
    //     description: 'Aplicação de um produto que protege os tecidos e couro contra manchas e sujeiras, facilitando a limpeza e prolongando a vida útil dos materiais.',
    //     price: 670,
    //     quantity: 1
    //   },
    //   {
    //     id: 6,
    //     image: '../../../assets/lavagem-motor.webp',
    //     title: 'Lavagem de Motor',
    //     description: 'Limpeza do motor, removendo sujeira e aumentando a vida útil. Deixa o motor do seu carro brilhando e protegido contra corrosão.',
    //     price: 2000,
    //     quantity: 1
    //   },
    //   {
    //     id: 7,
    //     image: '../../../assets/chassi.webp',
    //     title: 'Lavagem de Chassi',
    //     description: 'Protege o chassi contra ferrugem e prolonga a vida útil do seu veículo. Limpeza completa do chassi, removendo terra e resíduos.',
    //     price: 200,
    //     quantity: 1
    //   },
    // ];


    this.cards = [
      {
        id: 1,
        images: [
          '../../../assets/tradicional1.webp',
          '../../../assets/tradicional2.webp',
          '../../../assets/tradicional3.webp',
        ],
        title: 'Lavagem Tradicional',
        description: 'Limpeza prática e eficiente para a lataria e vidros, mantendo seu carro sempre com aparência de novo, sem complicação.',
        price: 90,
        quantity: 1,
      },
      {
        id: 2,
        images: [
          '../../../assets/interior2.webp',
          '../../../assets/interior.webp',
          '../../../assets/interior3.webp',
        ],
        title: 'Higienização de Interior',
        description: 'Eliminamos sujeira, poeira e odores, deixando o interior do seu carro limpo e renovado, proporcionando um ambiente mais saudável.',
        price: 500,
        quantity: 1,
      },
      {
        id: 3,
        images: [
          '../../../assets/detalhada1.webp',
          '../../../assets/detalhada4.webp',
          '../../../assets/detalhada2.webp',
          '../../../assets/detalhada3.webp',
        ],
        title: 'Lavagem Detalhada',
        description: 'Tratamento completo para o seu veículo, com limpeza interna e externa detalhada, deixando cada canto do carro impecável e protegido.',
        price: 150,
        quantity: 1,
      },
      {
        id: 4,
        images: [
          '../../../assets/motor2.webp',
          '../../../assets/motor4.webp',
          '../../../assets/motor3.webp',
          '../../../assets/motor1.webp',
        ],
        title: 'Lavagem de Motor',
        description: 'Limpeza do motor com produtos especiais, removendo sujeiras e resíduos, ajudando a aumentar a durabilidade e o desempenho do motor.',
        price: 180,
        quantity: 1,
      },
      {
        id: 5,
        images: [
          '../../../assets/farois1.webp',
          '../../../assets/farois2.webp',
        ],
        title: 'Restauração de Faróis',
        description: 'Restauramos o brilho dos seus faróis, removendo oxidação e melhorando a iluminação, garantindo maior segurança à noite.',
        price: 200,
        quantity: 1,
      },
      {
        id: 6,
        images: [
          '../../../assets/vitrificacao1.webp',
          '../../../assets/vitrificacao2.webp',
        ],
        title: 'Vitrificação de Pintura',
        description: 'Aplicação de camada protetora de cerâmica líquida, que garante brilho, resistência e proteção da pintura contra riscos e sujeira.',
        price: 1000,
        quantity: 1,
      },
    ];


  }

  ngOnInit(): void {
  }


  public addToCart(product: any): void {
    this.cartService.addItem(product).subscribe((response) => {
      this.alertMessage = response.message;
      this.alertIndicator = response.success;
      this.showAlert = true;

      // Oculta o alerta após 2 segundos
      setTimeout(() => {
        this.showAlert = false;
      }, 1500);
    });
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
