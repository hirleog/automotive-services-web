import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public openClose: boolean = false;
  scrolled = false;
  previousScrollPosition = window.pageYOffset;
  navbarVisible = true;
  lastScrollTop = 0;

  itemCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Inscreve-se no Observable para escutar mudanças
    this.subscription = this.cartService.itemCount$.subscribe(
      (count) => (this.itemCount = count)
    );
  }

  public menu() {
    this.openClose = !this.openClose;
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  //   if (currentScroll > this.lastScrollTop) {
  //     // Rolando para baixo: esconde o navbar
  //     this.scrolled = true;
  //   } else {
  //     // Rolando para cima: mostra o navbar
  //     this.scrolled = false;
  //   }

  //   this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  // }

  ngOnDestroy(): void {
    // Cancela a inscrição ao destruir o componente
    this.subscription.unsubscribe();
  }
}
