import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemCount = 0;
  items: any[] = [];

  public openClose: boolean = false;
  scrolled = false;
  previousScrollPosition = window.pageYOffset;
  navbarVisible = true;
  lastScrollTop = 0;

  cardObj: any = {};

  constructor(private cartService: CartService) {
    // Inscreve-se no contador de itens
    this.cartService.itemCount$.subscribe((count: any) => {
      this.itemCount = count;
    });

    // Inscreve-se na lista de itens
    this.cartService.items$.subscribe((items: any) => {
      this.itemCount = items.length;
      this.items = items;
    });

    // this.cartService.items$.subscribe((items: any) => {
    //   this.items = items;
    // });
  }

  addToCart(product: any): void {
    this.cartService.addItem(product).subscribe((count: any) => {
    });
  }
  removeFromCart(index: number): void {

    this.items.splice(index, 1); // Remove o item localmente
    // this.itemCount = this.items.length; // Atualiza o contador de itens
    this.cartService.updateItems(this.items); // Atualiza os itens no serviço

    if (this.items.length === 0) {
      this.openClose = false;
    }
  }
  closeCart(): void {
    // Lógica para fechar o carrinho
    this.openClose = false; // Exemplo de estado do carrinho
  }


  public menu() {
    this.openClose = !this.openClose;
  }
}
