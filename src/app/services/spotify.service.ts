import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistsArr: any[] = [];
  playlistTracks: any[] = [];
  spotifyUrl: string = 'https://api.spotify.com/v1/';
  token:string = 'BQC2qP4Hf87ZUOaAEPjxOdMOOudFzJmJnpD2SBIzJWtRiNycPZLDs2Nrd3fQ01AFxsMVXDR9zcD8msgnuPI';

  constructor( public http:HttpClient ) {
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.token
    });
    return headers;
  }

  getSong(id:string){
    let Url = `${this.spotifyUrl}tracks/${ id }`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers })
            .map((data:any) =>{
             return data;
            })
  }

  getArtists(searchTerm:string){
    let Url = `${this.spotifyUrl}search?query=${ searchTerm }&type=artist&limit=20`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers })
               .map((data:any) =>{
                 this.artistsArr = data.artists.items;
                return this.artistsArr;
              })
  }
  getArtist( id:string ){
    let Url = `${this.spotifyUrl}artists/${ id }`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers });

  }
  getPlaylist(){
    let Url = `${this.spotifyUrl}users/hn5lpst7ao8igf64pcqzu4awr/playlists/6UXs5OFW8yOIfK8A78jDLB?market=US`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers })
               .map((data:any) =>{
                 this.playlistTracks = data.tracks.items;
                return this.playlistTracks;
              })
  }
  getTempo( songId:string ){
    //let Url = `${this.spotifyUrl}audio-features/${ songId }`;
    let Url = 'https://api.spotify.com/v1/audio-features'
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers })
      .map((data:any) =>{
      return data;
    })
  }
}
