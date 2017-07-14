import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { QueenComponent } from './queen/queen.component';


const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  { path: 'bar', component: BarComponent },
  { path: 'the-rolling-stones', component: TheRollingStonesComponent },
  { path: 'the-beatles', component: TheBeatlesComponent },
  { path: 'queen', component: QueenComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    TheRollingStonesComponent,
    TheBeatlesComponent,
    QueenComponent,


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
