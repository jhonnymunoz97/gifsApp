import { Component, OnInit } from '@angular/core';
import { Gif, GIFResponse } from '../interface/modelGif';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifsService:GifsService) { }


  getResultados():Gif[]{
    return this.gifsService.resultadosGifs;
  }

  ngOnInit(): void {
  }

}
