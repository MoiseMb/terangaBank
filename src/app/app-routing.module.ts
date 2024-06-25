import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { PrincipaleComponent } from './principale/principale.component';
import { Exemple2Component } from './exemple2/exemple2.component';
import { AdmintarifComponent } from './admintarif/admintarif.component';
import { CompteaddComponent } from './compteadd/compteadd.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranscationComponent } from './transcation/transcation.component';
import { EditcompteComponent } from './editcompte/editcompte.component';

const routes : Routes = [
{path: 'login',component: LoginComponent},
{path: '',component: TestComponent},
{path: 'service',component: ServiceComponent},
{path: 'about',component: AboutComponent},
{path: 'contacts',component: ContactsComponent},
{path: 'test',component: TestComponent},
{path: 'admin',component: AdminloginComponent},
{path: 'admin/acceuil',component: PrincipaleComponent},
{path: 'exemple',component: Exemple2Component},
{path: 'admin/tarif',component: AdmintarifComponent},
{path: 'admin/compte',component: CompteaddComponent},
{path: 'admin/ajout',component: AjoutComponent},
{path: 'admin/virement',component: TranscationComponent},
{path: 'all',component: NavbarComponent},
{path: 'admin/compte/edit/:id',component: EditcompteComponent},






]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{


}
