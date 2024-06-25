import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Virement } from '../virement';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit{



  virementlist:Virement[]=[]
  constructor(private router:Router,private admin:LoginuserService){}
  ngOnInit(): void {

    this.admin.listvirement().subscribe(data=>{

      this.virementlist=data
    })
  }
  
  switch(){

    document.body.classList.toggle('dark');
    console.log("click")

   }


   toggle(){

    const sidebar = document.getElementById('bisko_sidebar') as HTMLElement;
    const content = document.getElementById('bisko_content') as HTMLElement;
    sidebar.classList.toggle('hide');
    content.classList.toggle('section_content_hide');
   }
   @HostListener('window:resize', ['$event'])
handleResize(): void {
  const sidebar = document.getElementById('bisko_sidebar') as HTMLElement;
  const content = document.getElementById('bisko_content') as HTMLElement;
  if (window.innerWidth < 768) {
    // Ajout des classes "hide" et "section_content_hide"
    sidebar.classList.add('hide');
    content.classList.add('section_content_hide');
  } else {
    // Suppression des classes "hide" et "section_content_hide"
    sidebar.classList.remove('hide');
    content.classList.remove('section_content_hide');
  }
}


menuClose() {
  const menu = document.getElementById('profile-menu') as HTMLElement;
  menu.classList.remove('active');
}
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
const menu = document.getElementById('menu') as HTMLElement;
const profil = document.getElementById('profil') as HTMLElement;

}

deconnecter(){

  Swal.fire({
    title: 'Êtes vous sûres?',
    text: "Voulez-vous vraiment vous déconnecter ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'oui'
  }).then((result) => {
    if (result.isConfirmed) {

      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 700);

    }
  })
}

}
