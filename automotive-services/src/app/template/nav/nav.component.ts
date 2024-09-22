import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public openClose: boolean = false;
  scrolled = false;


  constructor() { }

  ngOnInit(): void {

  }

  public menu() {
    this.openClose = !this.openClose;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
