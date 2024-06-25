import { Component, HostListener, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user';

@Component({
  selector: 'app-compteadd',
  templateUrl: './compteadd.component.html',
  styleUrls: ['./compteadd.component.css']
})
export class CompteaddComponent {


  nombre_user:number=0;
  userlist:User[]=[]
  user_old:User=new User();
  user_new:User=new User();

  constructor(private admin:LoginuserService,private router:Router) { }

  ngOnInit(): void {


    this.admin.nombreuser().subscribe(data =>{
      this.nombre_user=data;
    })

    this.admin.listuser().subscribe(data =>{
      console.log(data)
      this.userlist=data;
    })


  }

  // modifiercompte(numero:number){

  //   this.admin.voiruser(numero).subscribe(async (data: any) =>{

  //     this.user_old=data
  //     const { value: formValues } = await Swal.fire({
  //       title: 'Modifier Client',
  //       html:
  //         '<label>nom : </label>'+
  //         '<input id="swal-input1"  class="swal2-input" >' +'<br>'+'<br>'+
  //         '<label>Etat : </label>'+
  //         '<input type="radio" name="user_new.etat" value="ouvert">  ouvert   '+
  //         '<input type="radio"  name="user_new.etat" value="fermer">   fermer '+
  //         '<br>',
  //       focusConfirm: false,
  //       preConfirm: () => {

  //       }
  //     })

  //     if (formValues) {
  //       Swal.fire(JSON.stringify(formValues))
  //     }


  //   })
  // }

  supprimeruser(ed:number){
    Swal.fire({
      title: 'Êtes vous sûres?',
      text: "Voulez-vous vraiment supprimer ce client ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui'
    }).then((result) => {
      if (result.isConfirmed) {


          this.admin.deleteuser(ed).subscribe(data=>{
            Swal.fire(
              'Suppression reussit!','',

              'success'
            )
            setTimeout(() => {
              const currentUrl = this.router.url;
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate([currentUrl]);
              });
            }, 700);
          },error=>Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erreur lors de la suppresion',
          })

          );



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


  rediriger(){

    this.router.navigate(['/admin/ajout']);
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
          this.router.ngOnDestroy();
        }, 700);
      }
    })
  }

 
}
