import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpotifyService } from '../../app/services/spotify.service';
import { MusicService } from '../../app/services/music.service';

import { SettingsPage } from '../settings/settings';
import { BluetoothPage } from '../bluetooth/bluetooth';
import { songDetails } from '../../app/interfaces/songdetails.interface';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tracks:any[] = [];
  // id:string = "2ye2Wgw4gimLv2eAKyk1NB";
  id:string = "";
  // songId:string = "1nQRg9q9uwALGzouOX5OyQ";
  songId:string = "";
  userId: 'hn5lpst7ao8igf64pcqzu4awr';
  playlistId: '6UXs5OFW8yOIfK8A78jDLB';
  newToken:string = "BQBatl4CDbR2n1Qw9VLTU9tZgDGX7rx6 N5sYWf65qasCYKzanhGj5JwP2c2Rd_xYg14Qkv9Rffokfnm1hPvdz4MevhX3ZyYN75c2kUyV";
  song:any = {};
  songArr:songDetails[] = [];
  constructor(public navCtrl: NavController, public _spotifyService:SpotifyService, public _ms:MusicService) {
    this.songId = this._ms.song;
    this.songArr = this._ms.playlistSongs;
    this._spotifyService.getSong(this.songId).subscribe( song =>{
      this.song = song;

      console.log("Song", song)
      setTimeout( this.wasteTime(), song.duration_ms);
    })
  }
  viewSettings(){
    this.navCtrl.push(BluetoothPage);
  }
  wasteTime(){
    return;
  }
}
