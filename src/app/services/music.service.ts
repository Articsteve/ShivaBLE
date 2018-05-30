import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SpotifyService } from '../../app/services/spotify.service';
import { songDetails } from '../interfaces/songdetails.interface';
@Injectable()
export class MusicService implements OnInit{

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

  mood:number;

  relaxPlaylistUri:string = "spotify:user:spotify:playlist:37i9dQZF1DWU0ScTcjJBdj";   //0 relax
  concentrationPlaylistUri = "spotify:user:spotify:playlist:37i9dQZF1DWSluGMsH1R9r";  //1 concentration
  trainingPlaylistUri = "spotify:user:spotify:playlist:37i9dQZF1DX8ucVJaqqjpS";       //2 training
  runningPlaylistUri = "spotify:user:spotify:playlist:37i9dQZF1DX8ucVJaqqjpS";        //3 running

  freeRunUri = "spotify:user:spotify:playlist:37i9dQZF1DXadOVCgGhS7j"                 //4 free run 150-165
  warmUpUri = "spotify:user:spotify:playlist:37i9dQZF1DX3PIAZMcbo2T";                 //5 warm up 130-150


  playlistSongs:songDetails[] = [];
  concentrationPlaylist:any = [];
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
  }
  randomNumberGeneratorM(){
  let num = Math.round(Math.random() * 160)
  return num;
  }
  getPlaylist(){
    let localMood = this.mood;
      switch(localMood){
        case 0:{
          //0 relax
          return this.relaxPlaylistUri;
        }
        case 1:{
          //1 concentration
          return this.concentrationPlaylistUri;
        }
        case 2:{
          //2 training
          return this.trainingPlaylistUri;
        }
        case 3:{
          //3 running
          return this.runningPlaylistUri;
        }
        case 4:{
          //4 free run 150-165
          return this.freeRunUri;
        }
        case 5:{
          //5 warm up 130-150 
          this.warmUpUri;
        }
        default:{
          return;
        }
      }
  }
  ngOnInit(){

  }

}
