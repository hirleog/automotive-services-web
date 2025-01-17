import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemCount = 0;

  // BehaviorSubject para emitir atualizações
  private itemCountSubject = new BehaviorSubject<number>(this.itemCount);

  // Observable para que outros componentes possam escutar
  itemCount$ = this.itemCountSubject.asObservable();

  // Incrementa o contador e emite o novo valor
  addItem(): void {
    this.itemCount++;
    this.itemCountSubject.next(this.itemCount); // Emite a mudança
  }

  // Retorna o valor atual do contador
  getItemCount(): number {
    return this.itemCount;
  }
}
