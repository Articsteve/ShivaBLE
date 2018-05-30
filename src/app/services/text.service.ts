import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesTextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TextService {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesTextProvider Provider');
  }
  doStuff(){
    this.http.get('../../../src/assets/txt/log.txt').subscribe(data => {
    //console.log('data', data.text());
    })
  }
}
