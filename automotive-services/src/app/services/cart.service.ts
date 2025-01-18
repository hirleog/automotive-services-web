import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemCard: any[] = this.getCartFromLocalStorage(); // Inicializa com os dados do localStorage
  private itemCount = this.itemCard.length; // Define o contador inicial com base no tamanho da lista

  // BehaviorSubject para gerenciar estados reativos
  private itemCountSubject = new BehaviorSubject<number>(this.itemCount);
  private itemsSubject = new BehaviorSubject<any[]>(this.itemCard);

  // Observables para outros componentes
  itemCount$ = this.itemCountSubject.asObservable();
  items$ = this.itemsSubject.asObservable();

  constructor() {
    // Sincroniza os dados iniciais do localStorage
    this.updateCartState();
  }

  // Função para adicionar item ao carrinho
  addItem(product?: any): Observable<number> {
    if (product) {
      this.itemCard.push(product);
      this.updateCartState(); // Atualiza o estado do carrinho
    }

    // Retorna um Observable com o novo contador
    return of(this.itemCount);
  }

  // Função para atualizar os itens do carrinho
  updateItems(items: any[]): void {
    this.itemCard = items;
    this.updateCartState(); // Atualiza o estado do carrinho
  }

  // Função para obter o estado atual dos itens (opcional)
  getItems(): Observable<any[]> {
    return this.items$;
  }

  // Salva os dados do carrinho no localStorage
  private saveCartToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.itemCard));
  }

  // Recupera os dados do carrinho do localStorage
  private getCartFromLocalStorage(): any[] {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  // Atualiza o estado do carrinho e emite novos valores
  private updateCartState(): void {
    this.itemCount = this.itemCard.length; // Atualiza o contador com o tamanho da lista
    this.saveCartToLocalStorage(); // Salva no localStorage
    this.itemCountSubject.next(this.itemCount); // Emite o novo contador
    this.itemsSubject.next(this.itemCard); // Emite a lista atualizada
  }
}
