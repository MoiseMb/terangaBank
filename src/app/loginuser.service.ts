import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Virement } from './virement';
import { Parametress } from './parametress';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseURL="api/user/login";
  private baseregis="api/user/register";
  private baseURLadmin="api/admin/login";


  constructor(private httpclient:HttpClient) { }



  loginUser(user:User):Observable<object>{



    console.log(user);

    return this.httpclient.post(`${this.baseURL}`, user );
  }

  adminverifif(user:User):Observable<object>{



    console.log(user);

    return this.httpclient.post(`${this.baseURLadmin}`, user );
  }
  registerUser(user:User):Observable<object>{



    console.log(user);

    return this.httpclient.post(`${this.baseregis}`, user );
  }

  nombreuser():Observable<any> {

    return this.httpclient.get<number>("api/user/usertotal");
  }
  listuser():Observable<any> {

    return this.httpclient.get<User[]>("api/user/userlist");
  }
  listvirement():Observable<any> {

    return this.httpclient.get<Virement[]>("api/admin/virementlist");
  }

  voirtarif():Observable<any>{

    return this.httpclient.get<number>("api/admin/voirtaux");
  }

  modifiertarif(tarif:Parametress):Observable<object>{

    return this.httpclient.post("api/admin/modifiertaux",tarif);
  }

  voiruser(id:number):Observable<any>{

    return this.httpclient.get<User>("api/user/voircompte?id="+id);
  }

  deleteuser(id:number):Observable<any>{

    return this.httpclient.get<User>("api/user/delete?id="+id);
  }
}
