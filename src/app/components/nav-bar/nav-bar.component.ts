import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service";

import { enableProdMode } from '@angular/core';
import { Router } from '@angular/router';
enableProdMode();

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLogin: boolean;
  public nomeUser: string;
  public emailUser: string;
  public avatarUser: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if(auth){
        this.isLogin = true;
        this.nomeUser = auth.displayName;
        this.emailUser = auth.email;
        this.avatarUser = auth.photoURL;  
      }else{
        this.isLogin = false;
      }
    })
  }

  login(){
    this.authService.loginGoogle().then(resp=>{
      this.router.navigate(['/home']);
    }).catch(err => console.log(err));

  }

  logOut(){
    this.authService.logOut();
  }

}
