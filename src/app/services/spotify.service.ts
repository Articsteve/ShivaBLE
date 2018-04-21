import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistsArr: any[] = [];
  spotifyUrl: string = 'https://api.spotify.com/v1/';
  token:string = 'BQBAjPRpv3mNWLCj77p-RVkw7ys3Qozl2G_QoTwaz__nYdptoZ1immmbypLRwBu1qP-Tbbc_K0tnujHc8IE';

  constructor( public http:HttpClient ) {
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });
    return headers;
  }

  getTop( id:string ){
    let Url = `${this.spotifyUrl}artists/${ id }/top-tracks?country=US`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers })
            .map((data:any) =>{
             return data.tracks;
            })
  }
  getSong(id:string){
    //https://api.spotify.com/v1/tracks/{id}
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
    //.subscribe(data =>{console.log(data)})
  }
  getArtist( id:string ){
    let Url = `${this.spotifyUrl}artists/${ id }`;
    let headers:HttpHeaders = this.getHeaders();
    return this.http.get(Url, { headers });
               /*.map((data:any) =>{
                 this.artistsArr = data.artists.items;
                return this.artistsArr;
              })*/
  }
}
