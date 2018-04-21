import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'landingpage',
  templateUrl: 'landingpage.html'
})
export class LandingpageComponent {

  text: string;

  constructor( private navCtrl:NavController ) {
    console.log('Hello LandingpageComponent Component');
    this.text = 'Hello World';
  }
  viewHome(){
    this.navCtrl.push(HomePage);
  }
}
