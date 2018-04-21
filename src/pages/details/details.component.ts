import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'app-detail',
  templateUrl: 'details.component.html',
})
export class DetailComponent implements OnInit {

  constructor( public navCtrl:NavController,public navParams:NavParams, public alertCtrl: AlertController) {
  }
  ngOnInit() {}
}
