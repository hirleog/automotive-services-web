import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemCard: any[] = this.getCartFromLocalStorage(); // Inicializa com os dados do localStorage
  private itemCount = this.itemCard.length; // Define o contador inicial com base no tamanho da lista
  private carrinhoAbertoSubject = new BehaviorSubject<boolean>(false);

  // BehaviorSubject para gerenciar estados reativos
  private itemCountSubject = new BehaviorSubject<number>(this.itemCount);
  private itemsSubject = new BehaviorSubject<any[]>(this.itemCard);
  private cart: Product[] = [];

  // Observables para outros componentes
  itemCount$ = this.itemCountSubject.asObservable();
  items$ = this.itemsSubject.asObservable();

  constructor() {
    // Sincroniza os dados iniciais do localStorage
    this.updateCartState();
  }

  abrirCarrinho() {
    this.carrinhoAbertoSubject.next(true);
  }
  // Método para fechar o carrinho
  fecharCarrinho() {
    this.carrinhoAbertoSubject.next(false);
  }
  getCarrinhoStatus() {
    return this.carrinhoAbertoSubject.asObservable();
  }

  addItem(product?: any): Observable<{ success: boolean; message: string }> {
    if (product) {
      const existingProduct = this.itemCard.find((item: any) => item.id === product.id);

      if (existingProduct) {
        // Retorna uma mensagem informando que o produto já existe no carrinho
        return of({ success: false, message: 'O produto já está no carrinho!' });
      } else {
        this.itemCard.push(product);
        this.updateCartState(); // Atualiza o estado do carrinho
        return of({ success: true, message: 'Produto adicionado ao carrinho com sucesso!' });
      }
    }

    // Retorna um erro genérico caso o produto seja inválido
    return of({ success: false, message: 'Erro ao adicionar o produto ao carrinho.' });
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


  // Retornar os produtos do carrinho
  getCart(): Product[] {
    return this.cart;
  }

  // Adicionar produto ao carrinho (com a regra de não duplicar)
  addProduct(newProduct: Product): void {
    const existingProduct = this.cart.find((p) => p.id === newProduct.id);
    if (existingProduct) {
      alert('O produto já está no carrinho!');
    } else {
      this.cart.push({ ...newProduct, quantity: 1 });
    }
  }

  // Remover produto do carrinho
  removeProduct(product: Product): void {
    this.cart = this.cart.filter((p) => p.id !== product.id);
  }
}
