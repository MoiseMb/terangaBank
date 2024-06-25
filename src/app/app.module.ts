import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { ContactsComponent } from './contacts/contacts.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrincipaleComponent } from './principale/principale.component';
import { Exemple2Component } from './exemple2/exemple2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AdmintarifComponent } from './admintarif/admintarif.component';
import { CompteaddComponent } from './compteadd/compteadd.component';
import { TranscationComponent } from './transcation/transcation.component';
import { AjoutComponent } from './ajout/ajout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditcompteComponent } from './editcompte/editcompte.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AcceuilComponent,
    TestComponent,
    LoginComponent,
    ServiceComponent,
    ContactsComponent,
    AdminloginComponent,
    AdminpageComponent,
    PrincipaleComponent,
    Exemple2Component,
    AdmintarifComponent,
    CompteaddComponent,
    TranscationComponent,
    AjoutComponent,
    NavbarComponent,
    EditcompteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
