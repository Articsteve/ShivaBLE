import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpotifyService } from '../../app/services/spotify.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tracks:any[] = [];
  id:string = "2ye2Wgw4gimLv2eAKyk1NB";
  songId:string = "1nQRg9q9uwALGzouOX5OyQ";
  song:any = {};
  constructor(public navCtrl: NavController, public _spotifyService:SpotifyService) {
    this._spotifyService.getTop(this.id).subscribe( tracks => {
        this.tracks = tracks;
        console.log(this.tracks);
      })
    this._spotifyService.getSong(this.songId).subscribe( song =>{
      console.log(song);
      this.song = song;
    })
  }

}
