import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifsResponse';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private gifs:Gif[]=[];
  private apiKey: string = 'hKdpgqI4dnITwv3xwG5S1ajj8aCnni1M';
  private baseUrl:string = 'https://api.giphy.com/v1/gifs/';
  private gifHistory: string[] = [];

  constructor(
    private htpp:HttpClient
  ) {
    const gifs = (localStorage.getItem('gifs')) ? JSON.parse(localStorage.getItem('gifs') || '') : []
    this.gifHistory = gifs;
  }

  allHistoyGifs():string[]{
    return [...this.gifHistory];
  }

  getfoundGifs():Gif[]{
    return [...this.gifs];
  }

  private organizeGifsHistory(gif_search:string):void{
    this.gifHistory = this.gifHistory.filter(gif=> gif != gif_search);
    this.gifHistory = this.gifHistory.splice(0,9);
  }

  addGifHistory(gif:string):void{
    this.organizeGifsHistory(gif.toLocaleLowerCase());
    this.gifHistory.unshift(gif.toLocaleLowerCase());
    localStorage.setItem('gifs',JSON.stringify(this.gifHistory));
  }

  searchGifHistoryByName(gif_search:string):void{
    const url = `${this.baseUrl}search?`;
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q',gif_search)
      .set('limit',8);
    this.htpp.get<SearchGIFResponse>(url,{params}).subscribe( resp =>{
      this.gifs = resp.data;
    });
  }




}
