import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the BluetoothProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseService {

  fireUrl:string = "https://shiva-45f78.firebaseio.com/datos.json"
  constructor(public http: HttpClient, private httpC:Http) {

  }
  getBPM(){
      return this.httpC.get( this.fireUrl ).map( res =>
      res.json()
    )
  }
}
