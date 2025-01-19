import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { formatarValorEmReal } from 'src/app/utils/utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public itemCount = 0;
  public items: any[] = [];

  public openClose: boolean = true;
  public scrolled = false;
  public previousScrollPosition = window.pageYOffset;
  public navbarVisible = true;
  public lastScrollTop = 0;

  public cardObj: any = {};
  public totalPrice: any;
  public cardItems: any[] = [];

  public carrinhoAberto: boolean = false;
  private carrinhoSubscription: Subscription = new Subscription();

  constructor(
    private cartService: CartService,

  ) {

    // Recupera os dados do carrinho armazenados no localStorage ao carregar
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.itemCount = this.items.length;
    }

    // Inscreve-se no contador de itens
    this.cartService.itemCount$.subscribe((count: any) => {
      this.itemCount = count;
    });

    // Inscreve-se na lista de itens
    this.cartService.items$.subscribe((items: any) => {
      this.items = items;
      this.itemCount = items.length;

      this.totalPrice = this.items.reduce((accumulator: any, produto: any) => accumulator + produto.price, 0);


      console.log(this.totalPrice);

      this.saveCartToLocalStorage(); // Salva sempre que os itens mudam

    });
  }

  ngOnInit(): void {
    // Se inscreve para ouvir as mudanças na flag do carrinho
    this.carrinhoSubscription = this.cartService.getCarrinhoStatus().subscribe(status => {
      this.carrinhoAberto = status;
    });

  }

  public addToCart(product: any): void {
    this.cartService.addItem(product).subscribe(() => {
      this.saveCartToLocalStorage(); // Salva os itens atualizados

    });
  }
  public removeFromCart(index: number): void {

    this.items.splice(index, 1); // Remove o item localmente
    this.cartService.updateItems(this.items); // Atualiza os itens no serviço
    this.saveCartToLocalStorage(); // Salva os itens atualizados

    if (this.items.length === 0) {
      this.openClose = false;
    }
  }
  public closeCart(): void {
    // Lógica para fechar o carrinho
    this.openClose = false; // Exemplo de estado do carrinho
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  abrirCarrinho() {
    const carrinho = document.querySelector('.carrinho-lateral') as HTMLElement;
    carrinho.style.transform = 'translateX(0)';
  }

  fecharCarrinho() {
    this.cartService.fecharCarrinho();
  }
  public sendCartMessage(): void {
    let cardElements: string = '';
    const totalFormatted: string = formatarValorEmReal(this.totalPrice);

    this.cartService.getItems().subscribe(items => {
      items.map((element, index) => {
        cardElements += `${index + 1}x ${element.title} - R$${element.price} %0A`;

      });
    });

    const mensagem = `Meu carrinho:%0A%0A${cardElements} %0A Valor total do carrinho: R$${totalFormatted}.`;
    const numeroWhatsApp = '5511973752898';

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    window.open(urlWhatsApp, '_blank');

  }

  ngOnDestroy(): void {
    if (this.carrinhoSubscription) {
      this.carrinhoSubscription.unsubscribe();
    }
  }
}
