import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // styleUrls: ['../../assets/stylebr.css']
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
  dragPosition = {x: 0, y: 0};
  voirMenu(){

    const sidebar=  document.body.querySelector('nav') as HTMLElement;

    sidebar.classList.toggle("close");
    }

    // Pour changer le theme en mode sombre
    changerMode(){

    const body=document.body;
    const modeText=document.body.querySelector(".mode-text") as HTMLElement;
    body.classList.toggle('dark');

    if(body.classList.contains("dark")){
      modeText.innerText = "Light mode";
    }else{
      modeText.innerText = "Dark mode";

    }

    }
}
