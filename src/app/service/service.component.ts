import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }

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
