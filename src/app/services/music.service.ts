import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpotifyService } from '../../app/services/spotify.service';
import { songDetails } from '../interfaces/songdetails.interface';
@Injectable()
export class MusicService {

  //75-150
  motivational:any = [
    "5c5a2Ptu8eyIpljhQHjIqk", //Lose Yourself
    "5Z01UMMf7V1o0MzF86s6WJ" //Rest 4 the Wicked
  ]
  //15-75
  calm:any = [
    "3l1kz27OQQ4qIlaaKaaweh", //Winter Moon
    "561F1zqRwGPCTMRsLsXVtL"
  ]
  //150-400
  energetic:any = [
    "4aW4j7ef4H9SPsfKrczvvr", //Hellcat
    "0lMrWcrVXHPEuVBuc0nRzZ" //Specter
  ]

  playlistSongs:songDetails[] = [];
  song:string = "";
  constructor(public http: HttpClient, public _spotifyService:SpotifyService) {
    let take1:number = this.randomNumberGeneratorM();
    let take2:number = this.randomNumberGeneratorM();
    let take3:number = this.randomNumberGeneratorM();
    let prom:number = (take1 + take2 + take3)/3;
    if( prom > 0 && prom < 75 ){
      this.song = this.calm[0];
    }else if( prom > 75 && prom < 150 ){
      this.song = this.motivational[0];
    }else if( prom > 150 ){
      this.song = this.energetic[0];
    }
    //console.log(prom, "prom", take1, take2, take3)
    this._spotifyService.getPlaylist().subscribe( playlist =>{
        for( let track of playlist){
           //let tempo:any = this._spotifyService.getTempo( track.track.id );
            let tempSong:songDetails = {
              name: track.track.name,
              id: track.track.id,
              duration: track.track.duration_ms,
              uri: track.uri
            }
           this.playlistSongs.push( tempSong );
           //console.log( "Song", track.track.name, "Tempo",  tempo );
           //console.log(track);
           //this.playSong( track.track.id , track.duration_ms);
        }
    //  })
    })
     console.log("Music Service Music Array", this.playlistSongs)
  }
  randomNumberGeneratorM(){
  let num = Math.round(Math.random() * 160)
  return num;
  }

}
