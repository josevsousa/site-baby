import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Http } from "@angular/http";

import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { promise } from "protractor";
import { Observable } from "rxjs/Observable";
import { Contato } from "../models/contato";

@Injectable()
export class ContatoService {

  constructor( private db: AngularFirestore ) { }


  // add novoContato
  addContato(form) {
    // new id
    const uid = this.db.createId();

    // registro do firebase  
    const contatoRef: AngularFirestoreDocument<Contato> = this.db.doc(`contatos/${uid}`);

    const contatoData = {
      uid,
      email: form.value.email,
      nome: form.value.nome,
      message: form.value.message
    }
     
    return contatoRef.set(contatoData);
  }  

}
