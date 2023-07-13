import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interface/gifsResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flag: boolean = false;
  constructor(
    private gifService: GifsService
  ){}

  get gifs():Gif[]{
    const gifs = this.gifService.getfoundGifs();
    this.flag = (gifs.length>0) ? false : true;
    return gifs;
  }

}
