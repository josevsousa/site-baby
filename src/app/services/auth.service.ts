import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map'
//.. other imports


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { } 

  // logar com o google
  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );

  }

  // desconectar 
  logOut(){
    return this.afAuth.auth.signOut();
  }

  // retorna user
  getAuth(){
    return this.afAuth.authState.map( auth => auth );
  }  

}
