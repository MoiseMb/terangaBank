import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  list: NodeListOf<Element> |null=null;
  toggle: HTMLElement |null=null;
  navigation: HTMLElement | null=null;
  main: HTMLElement | null=null;

  constructor() { }

  ngOnInit(): void {
    this.list = document.querySelectorAll(".navigation li");

    this.list.forEach((item) => item.addEventListener("mouseover", this.activeLink));

    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");
  }


  activeLink = (event: Event) => {
    if (this.list) {
      this.list.forEach((item) => {
        item.classList.remove("hovered");
      });
    }
    if (event.target instanceof Element) {
      event.target.classList.add("hovered");
    }
  }

  toggleNavigation = () => {
    if (this.navigation && this.main) {
      this.navigation.classList.toggle("active");
      this.main.classList.toggle("active");
    }
  }

voirMenu(){


 const toggle = document.querySelector(".toggle") as HTMLElement;
 const navigation = document.querySelector(".navigation") as HTMLElement;
 const main = document.querySelector(".main") as  HTMLElement;

  navigation.classList.toggle("active");
  main.classList.toggle("active");

}
}
