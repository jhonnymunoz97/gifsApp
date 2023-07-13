import { Component,ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtSearch')
  txtSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService:GifsService
  ){}

  searchGif(){
    if(this.txtSearch.nativeElement.value.length>0){
      this.gifService.searchGifHistoryByName(this.txtSearch.nativeElement.value);
      this.gifService.addGifHistory(this.txtSearch.nativeElement.value);
      this.txtSearch.nativeElement.value = '';
    }else alert('El gif es requerido')
  }

}
