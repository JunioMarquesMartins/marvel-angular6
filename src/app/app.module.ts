import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NgxPaginationModule} from 'ngx-pagination';

// Importar Rutas
import { ROUTES } from './app.routes';

// Services
import { MarvelService } from "./service/marvel.service";
// Components
import { CharactersComponent } from './component/characters/characters.component';
import { MarvelListComponent } from './component/shared/marvel-list/marvel-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CharacterInfoComponent } from './component/character-info/character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MarvelListComponent,
    NavbarComponent,
    CharacterInfoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
