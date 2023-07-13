import { Component,Input } from '@angular/core';
import { Gif } from '../../interface/gifsResponse';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  gif!:Gif;

  constructor(){}

}
