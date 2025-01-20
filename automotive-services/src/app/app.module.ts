import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';

import { HttpClientModule } from '@angular/common/http'; // Importa o módulo
import { BooksService } from './apagar/books.service';
import { CrudLivrosComponent } from './apagar/crud-livros/crud-livros.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CartComponent } from './components/cart/cart.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { MidBannerComponent } from './components/mid-banner/mid-banner.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ServicesComponent } from './components/services/services.component';
import { WppBtnComponent } from './components/wpp-btn/wpp-btn.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    ClientReviewsComponent,
    CrudLivrosComponent,
    CardsComponent,
    WppBtnComponent,
    MidBannerComponent,
    QuestionsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
