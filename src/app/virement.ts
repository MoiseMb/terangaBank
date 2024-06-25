import { User } from "./user";

export class Virement {

  id!:number;
  nom!:String;
  user_destination!:User
  user_source!:User;
  montant!:number;
  date!:Date;

}
