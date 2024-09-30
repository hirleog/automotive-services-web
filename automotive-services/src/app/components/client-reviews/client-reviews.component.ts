import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {

  public cards = [
    {
      name: 'João Silva',
      ocupation: 'Consultor',
      review: 'O Lorem Ipsum tem muitas variações, porém, algumas versões estão modificadas com passagens humorísticas ou palavras randomizadas.',
      imgSrc: '../../../assets/client2.svg',
    },
    {
      name: 'Maria Oliveira',
      ocupation: 'Designer',
      review: 'O texto Lorem Ipsum foi alterado ao longo dos anos, e algumas de suas passagens contêm injeções de humor ou palavras aleatórias.',
      imgSrc: '../../../assets/client1.svg',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
