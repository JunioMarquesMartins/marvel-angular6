import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NgxPaginationModule} from 'ngx-pagination';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
} from '@angular/material';

// Importar Rutas
import { ROUTES } from './app.routes';

// Services
import { MarvelService } from './service/marvel.service';
import { DataNotImageService } from './service/data-not-image.service';
// Components
import { CharactersComponent } from './component/characters/characters.component';
import { MarvelListComponent } from './component/shared/marvel-list/marvel-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CharacterInfoComponent } from './component/character-info/character-info.component';
import { ButtonComponent } from './component/shared/button/button.component';
import { ComicsComponent } from './component/comics/comics.component';
import { LoadingComponent } from './component/shared/loading/loading.component';
import { ComicInfoComponent } from './component/comic-info/comic-info.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { SearchComponent } from './component/search/search.component';
import { MarvelInfoComponent } from './component/shared/marvel-info/marvel-info.component';
import { SearchCharactersComponent } from './component/search-characters/search-characters.component';
import { LinksMarvelComponent } from './component/shared/links-marvel/links-marvel.component';
import { DropdownComponent } from './component/shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MarvelListComponent,
    NavbarComponent,
    CharacterInfoComponent,
    ButtonComponent,
    ComicsComponent,
    LoadingComponent,
    ComicInfoComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    MarvelInfoComponent,
    SearchCharactersComponent,
    LinksMarvelComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatInputModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    MarvelService,
    DataNotImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
