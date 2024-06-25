import { Component, HostListener, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {


  nombre_user:number=0;

  user:User=new User();

  constructor(private admin:LoginuserService,private loginuserservice:LoginuserService,private router:Router) { }


  password2!:String;

  userRegister(monFormulaire: NgForm){
    this.user.etat="ouvert";
    console.log(this.user);
    this.loginuserservice.registerUser(this.user).subscribe(data=>{
      Swal.fire(
        'Creation compte reussit','',

        'success'
      )

      setTimeout(() => {
        this.router.navigate(['/admin/compte']);
      }, 1200);




    },error=>Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'verifier les champs',
    })

    );
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
