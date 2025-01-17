import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemCount = 0;
  private itemCard: any = [];

  // BehaviorSubject para gerenciar estados reativos
  private itemCountSubject = new BehaviorSubject<number>(this.itemCount);
  private itemsSubject = new BehaviorSubject<any[]>(this.itemCard);

  // Observables para outros componentes
  itemCount$ = this.itemCountSubject.asObservable();
  items$ = this.itemsSubject.asObservable();

  // Função para adicionar item ao carrinho
  addItem(product?: any): Observable<number> {
    if (product) {
      this.itemCard.push(product);
      this.itemCount++;
      
      this.itemCountSubject.next(this.itemCount); // Atualiza o contador
      this.itemsSubject.next(this.itemCard); // Atualiza a lista de itens
    }

    // Retorna um Observable com o novo contador
    return of(this.itemCount);
  }

  // Função para obter o estado atual dos itens (opcional)
  getItems(): Observable<any[]> {
    return this.items$;
  }

  updateItems(items: any[]): void {
    this.itemCard = items;
    this.itemsSubject.next(this.itemCard); // Emite a lista atualizada
  }
}
