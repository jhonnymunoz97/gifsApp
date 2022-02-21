import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SearchComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  providers:[
  ]
})
export class GifsModule { }
