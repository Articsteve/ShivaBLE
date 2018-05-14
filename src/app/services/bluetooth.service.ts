import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BluetoothProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BluetoothService {

  private _navigator:any;
  private device:any;
  private listenHR:any;

  constructor(public http: HttpClient) {
    this._navigator = navigator;
  }
  connect(){
    console.log("Requesting Bluetooth Device");
    this._navigator.bluetooth.requestDevice({
      filters:[{ name: 'raspberrypi'}]
    })
    .then(device =>{
      console.log('> Found' + device.name)
      console.log('Conncting to GATT server..')
          return device.gatt.connect();
      })
    }
  }
