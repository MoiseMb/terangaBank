import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrls: ['./exemple2.component.css']
})
export class Exemple2Component implements OnInit {



  constructor() { }

  ngOnInit(): void {

    Aos.init();
    
    const allSideMenu = document.querySelectorAll('#bisko_sidebar .bisko_side-menu.top li a');

    allSideMenu.forEach(item => {
      const li = item.parentElement;

      item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
          i.parentElement?.classList?.remove('active');
        });
        li?.classList?.add('active');
      });
    });

    const menuBar = document.querySelector('#bisko_content nav .bx.bx-menu');
    const bisko_sidebar = document.getElementById('bisko_sidebar');

    menuBar?.addEventListener('click', function () {
      bisko_sidebar?.classList.toggle('hide');
    });

    const searchButton = document.querySelector('#bisko_content nav form .form-input button');
    const searchButtonIcon = document.querySelector('#bisko_content nav form .form-input button .bx');
    const searchForm = document.querySelector('#bisko_content nav form');

    searchButton?.addEventListener('click', function (e) {
      if (window.innerWidth < 576) {
        e?.preventDefault?.();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList?.contains('show')) {
          searchButtonIcon?.classList?.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon?.classList?.replace('bx-x', 'bx-search');
        }
      }
    });

    if (window.innerWidth < 768) {
      bisko_sidebar?.classList?.add('hide');
    } else if (window.innerWidth > 576) {
      searchButtonIcon?.classList?.replace('bx-x', 'bx-search');
      searchForm?.classList?.remove('show');
    }

    window.addEventListener('resize', function () {
      if (this.innerWidth > 576) {
        searchButtonIcon?.classList?.replace('bx-x', 'bx-search');
        searchForm?.classList?.remove('show');
      }
    });

    const switchMode = document.getElementById('switch-mode') as HTMLInputElement;

    switchMode?.addEventListener('change', function () {
      if (this.checked) {
        document.body?.classList?.add('dark');
      } else {
        document.body?.classList?.remove('dark');
      }
    });

  }

}
