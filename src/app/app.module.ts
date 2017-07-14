import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { QueenComponent } from './queen/queen.component';
import { HomeComponent } from './home/home.component';
import { TheBeatlesComponent } from './the-beatles/the-beatles.component';
import { TheRollingStonesComponent } from './the-rolling-stones/the-rolling-stones.component';


const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  { path: 'bar', component: BarComponent },
  { path: 'the-rolling-stones', component: TheRollingStonesComponent },
  { path: 'the-beatles', component: TheBeatlesComponent },
  { path: 'queen', component: QueenComponent },
  { path: '', component: HomeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    TheRollingStonesComponent,
    TheBeatlesComponent,
    QueenComponent,
    HomeComponent,


  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
