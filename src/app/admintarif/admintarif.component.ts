import { Component, HostListener, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametress } from '../parametress';

@Component({
  selector: 'app-admintarif',
  templateUrl: './admintarif.component.html',
  styleUrls: ['./admintarif.component.css']
})
export class AdmintarifComponent implements OnInit  {


  nombre_user:number=0;
  tarif:number=0;
  ntarif=new Parametress();

  constructor(private admin:LoginuserService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.admin.voirtarif().subscribe(data =>{

      this.tarif=data;
    })
  }

  modifier(){



    Swal.fire({
      title: 'Êtes vous sûres?',
      text: "Voulez-vous vraiment  modifiez le tarif ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ntarif.id=1;

        this.admin.modifiertarif(this.ntarif).subscribe(data =>{
          Swal.fire(
            'Modification reussit!','',

            'success'
          )
          setTimeout(() => {
            const currentUrl = this.router.url;
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
            });
          }, 700);
        })
      }
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
