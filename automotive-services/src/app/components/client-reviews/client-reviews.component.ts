import { Component, HostListener, OnInit } from '@angular/core';
import { GoogleReviewsService } from 'src/app/services/google-reviews.service';

@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {
  reviews: any[] = [];
  isLoading = true; // Indica carregamento
  errorMessage: string | null = null; // Para erros

  feedbacks = [
    {
      text: 'O atendimento foi impecável! Superaram minhas expectativas com o serviço oferecido. Recomendo a todos!',
      client: 'Cliente 1',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 5
    },
    {
      text: 'Muito satisfeita com o trabalho realizado. A equipe foi profissional e cuidadosa, com resultados que superaram as minhas expectativas.',
      client: 'Cliente 2',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 4
    },
    {
      text: 'Excelente qualidade e ótimo atendimento. Me senti segura e bem atendida durante todo o processo. Voltarei com certeza!',
      client: 'Cliente 3',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 5
    },
    {
      text: 'O serviço é muito bom! A equipe tem grande experiência e prestou um atendimento excepcional do início ao fim. Muito obrigado!',
      client: 'Cliente 4',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 4
    },
    {
      text: 'Fiquei encantado com o resultado final. O cuidado com os detalhes e a dedicação da equipe fizeram toda a diferença. Recomendo de olhos fechados.',
      client: 'Cliente 5',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 5
    },
    {
      text: 'A experiência foi muito boa. A equipe foi cordial, prestativa e a qualidade do serviço foi excelente. Voltarei sempre que precisar.',
      client: 'Cliente 6',
      photoUrl: '../../../assets/rick-review.webp',  // URL da foto
      rating: 4
    },
  ];

  feedbackGroups: any[][] = [];
  groupSize = 3; // Padrão: 3 feedbacks por grupo

  constructor(
    private googleReviewsService: GoogleReviewsService
  ) { }

  ngOnInit(): void {
    this.updateGroupSize();
    this.createFeedbackGroups();
  }


  @HostListener('window:resize', [])
  onResize() {
    this.updateGroupSize();
    this.createFeedbackGroups();
  }

  updateGroupSize(): void {
    const width = window.innerWidth;

    if (width < 992) {
      this.groupSize = 2; // 2 feedbacks por grupo em telas médias (< 992px)
    } else {
      this.groupSize = 3; // 3 feedbacks por grupo em telas grandes (>= 992px)
    }
  }

  createFeedbackGroups(): void {
    this.feedbackGroups = []; // Limpa os grupos antigos
    for (let i = 0; i < this.feedbacks.length; i += this.groupSize) {
      this.feedbackGroups.push(this.feedbacks.slice(i, i + this.groupSize));
    }
  }
  // Função para gerar as estrelas
  getStars(rating: number) {
    return new Array(rating).fill(0);  // Retorna um array de tamanho 'rating' para as estrelas
  }

  public getGoogleReviews(): void {
    // Faz a chamada para buscar as avaliações
    this.googleReviewsService.getReviews().subscribe({
      next: (response) => {
        this.reviews = response.result.reviews || [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar as avaliações. Tente novamente mais tarde.';
        this.isLoading = false;
        console.error(error);
      },
    });
  }
}