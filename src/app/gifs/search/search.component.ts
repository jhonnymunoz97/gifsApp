import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @ViewChild('txt_buscar') txt_buscar!:ElementRef<HTMLInputElement>;
  
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  search(){
    this.gifsService.buscarGifs(this.txt_buscar.nativeElement.value.toLowerCase())
    this.txt_buscar.nativeElement.value = '';
  }

}
