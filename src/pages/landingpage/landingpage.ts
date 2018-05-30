import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicService } from '../../app/services/music.service';
import { TextService } from '../../app/services/text.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'landingpage',
  templateUrl: 'landingpage.html'
})
export class LandingpageComponent {

  text: string;

  constructor( private navCtrl:NavController, public _ms:MusicService, public _ts:TextService ) {
    console.log('Hello LandingpageComponent Component');
    this.text = 'Hello World';
    this._ts.doStuff();
  }
  viewHome(){
    this.navCtrl.push(HomePage);
  }
  viewHomeRelax(){
    this._ms.mood = 0;
    this.navCtrl.push(HomePage)
  }
}
