import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private gifService:GifsService
  ){}

  get allHistoyGifs():string[]{
    return this.gifService.allHistoyGifs();
  }

  searchGifHistoryByName(gif:string){
    this.gifService.searchGifHistoryByName(gif);
    this.gifService.addGifHistory(gif);
  }

}
