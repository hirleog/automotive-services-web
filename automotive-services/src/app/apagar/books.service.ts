import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Defina uma interface para o modelo Book
export interface Book {
  id?: number;  // Opcional para criação de novos livros
  title: string;
  author: string;
  published: string;  // A data deve ser uma string no formato ISO
  genre: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  // 1. Listar todos os livros (GET)
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2. Obter um livro por ID (GET)
  getBookById(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  // 3. Criar um novo livro (POST)
  createBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Book>(this.apiUrl, book, { headers });
  }

  // 4. Atualizar um livro existente (PUT)
  updateBook(id: number, book: Book): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Book>(url, book, { headers });
  }

  // 5. Deletar um livro (DELETE)
  deleteBook(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
