import { Component, OnInit } from '@angular/core';
import { GifsService } from './gifs/service/gifs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gifsApp';

  constructor(){}
 
  ngOnInit():void{
  }
}

