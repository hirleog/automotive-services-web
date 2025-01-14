import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  faqs = [
    {
      pergunta: "O advogado cobra algo para iniciar o processo trabalhista?",
      resposta: "Não. Em um processo trabalhista, você não precisa pagar nada para iniciar a ação. Os honorários do advogado só serão cobrados no caso de vitória, ou seja, após o recebimento da indenização ou verbas trabalhistas. O pagamento pode ser feito com uma parte do valor conquistado, sem custos iniciais.",
      show: 'true'
    },
    {
      pergunta: "O que acontece se eu perder o processo trabalhista?",
      resposta: "Se você perder o processo, não haverá cobrança de honorários advocatícios.",
      show: 'false'
    },
    {
      pergunta: "Se eu vencer o processo, o advogado cobra um percentual sobre o valor conquistado?",
      resposta: "Sim. Em muitos casos, os advogados trabalhistas cobram um percentual sobre o valor que você receberá com a decisão favorável, como forma de honorários. O percentual varia conforme o acordo firmado entre o cliente e o advogado.",
      show: 'false'
    },
    {
      pergunta: "Eu corro o risco de ter que pagar honorários se perder o processo trabalhista?",
      resposta: "Não. Caso você não vença o processo, você não terá que pagar os honorários do seu advogado, caso tenha firmado um contrato onde o pagamento depende do sucesso. Contudo, você pode ser responsabilizado por custas processuais e pelos honorários do advogado da parte contrária, dependendo do caso.",
      show: 'false'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
