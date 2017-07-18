import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

title: string;
bands: string[];

constructor(){
this.title  = 'Música del Siglo XX';
this.bands = ['Foo', 'Bar','The Rolling Stones', 'The Beatles', 'Queen'];
}

  ngOnInit() {
  }

}
