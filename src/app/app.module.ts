import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Services
import { MarvelService } from "./service/marvel.service";
import { CharactersComponent } from './component/characters/characters.component';
import { MarvelListComponent } from './component/shared/marvel-list/marvel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MarvelListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
