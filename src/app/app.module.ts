import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from "./shared/shared.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule, AngularFirestore } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";


// services
import { AuthService } from "./services/auth.service";
import { ContatoService } from './services/contato.service';

// components
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';


import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContatoComponent } from './contato/contato.component';
import { SocialComponent } from './components/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    BannerHomeComponent,
    NotFoundPageComponent,
    UserProfileComponent,
    ContatoComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
