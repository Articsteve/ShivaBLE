import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpotifyService } from '../../app/services/spotify.service';
import { MusicService } from '../../app/services/music.service';
import { FirebaseService } from '../../app/services/firebase.service';

import { SettingsPage } from '../settings/settings';
import { BluetoothPage } from '../bluetooth/bluetooth';
import { songDetails } from '../../app/interfaces/songdetails.interface';
//import { HeartbeatPage } from '../heartbeat/heartbeat';
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
  newToken:string = "BQCsN1lmXX5ut3UI3pw7CGk-L-agCl4kRVmMwaP1CYISs-5WUjU_C2fYb7scTLniNuTlZ2BZ7-YTlmD1FuY";
  song:any = {};
  songArr:songDetails[] = [];

  playlistUri:string;

  constructor(public navCtrl: NavController, public _spotifyService:SpotifyService, public _ms:MusicService, public _fbs:FirebaseService) {
    this._fbs.getBPM()
            .subscribe(data =>{
              console.log(data);
            });
    this.playlistUri = this._ms.getPlaylist();
    console.log(this._ms.mood, "Mood")
    console.log("playlist", this.playlistUri)
    this.songId = this._ms.song;
    this.songArr = this._ms.playlistSongs;
    this._spotifyService.getSong(this.songId).subscribe( song =>{
      this.song = song;
      setTimeout( this.wasteTime(), song.duration_ms);
    })
  }
  viewSettings(){
    //
    this.navCtrl.push(BluetoothPage);
  }
  wasteTime(){
    return;
  }
}
