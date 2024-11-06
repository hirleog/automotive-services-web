// import { Component, OnInit } from '@angular/core';

// @Component({
// selector: 'app-crud-livros',
// templateUrl: './crud-livros.component.html',
// styleUrls: ['./crud-livros.component.css']
// })
// export class CrudLivrosComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-crud-livros',
  templateUrl: './crud-livros.component.html',
  styleUrls: ['./crud-livros.component.css']
})
export class CrudLivrosComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { title: '', author: '', published: '', genre: '' };

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  // Listar todos os livros
  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => this.books = books);
  }

  // Criar um novo livro
  createBook(): void {

    const payload = {
      title: 'lalal',
      author: 'gui',
      published: '1925-04-10T00:00:00.000Z',
      genre: 'ficção'
    };

    this.bookService.createBook(payload).subscribe((book) => {
      this.books.push(book);  // Adicionar o novo livro à lista
      this.newBook = { title: '', author: '', published: '', genre: '' };  // Resetar o formulário
    });
  }

  // Deletar um livro
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);  // Remove o livro da lista
    });
  }

  // Atualizar um livro
  updateBook(book: Book): void {
    this.bookService.updateBook(book.id!, book).subscribe(() => {
      // Aqui você pode implementar lógica adicional após a atualização
    });
  }
}

