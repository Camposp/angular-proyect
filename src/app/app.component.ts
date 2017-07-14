import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  bands: string[];

  constructor(){
  this.title  = 'Música del Siglo XX';
  this.bands = ['Foo', 'Bar','The Rolling Stones', 'The Beatles', 'Queen'];
  }


}
