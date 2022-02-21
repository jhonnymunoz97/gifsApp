import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, GIFResponse } from '../interface/modelGif';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private ApiKey    : string   = 'hKdpgqI4dnITwv3xwG5S1ajj8aCnni1M'
  private urlBase   : string   = 'https://api.giphy.com/v1/gifs'
  private historial : string[] = []
  private resultados: Gif[]    =  []

  constructor(private http:HttpClient) {
      if(localStorage.getItem('historial')){
        this.historial = JSON.parse(<string>localStorage.getItem('historial'))
        if(localStorage.getItem('busqueda')) this.buscarGifs(<string>localStorage.getItem('busqueda'))
      }
      
  }

  get historialGifs():string[]{
    return [...this.historial];
  }

  get resultadosGifs():Gif[] {
    return [...this.resultados]
  }

  buscarGifs(busqueda:string):void{
    if(busqueda.trim().length<3){ 
      return;
    }else{
      if(!this.historial.includes(busqueda))
        this.historial.unshift(busqueda)
      this.historial = this.historial.splice(0,10);
      const params = new HttpParams()
                    .set('api_key',this.ApiKey)
                    .set('limit','10')
                    .set('q',busqueda)
      this.http.get<GIFResponse>(this.urlBase + '/search', { params } ).
        subscribe( resp => {
            this.resultados = resp.data;
      })
      localStorage.setItem('historial',JSON.stringify(this.historial)); 
      localStorage.setItem('busqueda',busqueda);
    }
  }

}
