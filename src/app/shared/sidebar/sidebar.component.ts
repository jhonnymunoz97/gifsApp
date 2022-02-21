import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  getHistorial():string[]{
    return this.gifsService.historialGifs;
  }

  ngOnInit(): void {
    
  }

  search(item:string){
    this.gifsService.buscarGifs(item.toLocaleLowerCase())
  }

}
