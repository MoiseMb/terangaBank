import { Component } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  user:User=new User();

  constructor(private loginuserservice:LoginuserService,private router:Router){


  }

  adminLogin(){

    console.log(this.user);
    this.loginuserservice.adminverifif(this.user).subscribe(data=>{
      Swal.fire(
        'Connexion reussit!','',

        'success'
      )
      setTimeout(() => {
        this.router.navigate(['/admin/acceuil']);
      }, 1200);


    },error=>Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'verifier les champs',
    })

    );

}
}
