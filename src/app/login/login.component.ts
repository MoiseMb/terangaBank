import { Component } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User=new User();

  voirInscription(){

    const divcontainer = document.querySelector('.divcontainer') as HTMLElement;

    divcontainer.classList.remove("sign-in-mode");
    divcontainer.classList.add("sign-up-mode");

  }
  voirConnexion(){

    const divcontainer = document.querySelector('.divcontainer') as HTMLElement;

    divcontainer.classList.remove("sign-up-mode");
    divcontainer.classList.add("sign-in-mode");


  }
  constructor(private loginuserservice:LoginuserService,private router:Router){


  }
password2!:String;
  userLogin(monFormulaire: NgForm){

    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      Swal.fire(
        'Connexion reussit!','',

        'success'
      )

      setTimeout(() => {
        this.router.navigate(['']);
      }, 1200);


    },error=>{Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'verifier les champs',
    })
    monFormulaire.reset();


  });
  }

  userRegister(monFormulaire: NgForm){
    this.user.etat="ouvert";
    console.log(this.user);
    this.loginuserservice.registerUser(this.user).subscribe(data=>{
      Swal.fire(
        'Creation compte reussit','',

        'success'
      )

      monFormulaire.reset();


    },error=>Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'verifier les champs',
    })

    );
  }
}
