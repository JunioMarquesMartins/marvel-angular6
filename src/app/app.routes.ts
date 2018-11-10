import { Routes } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { CharactersComponent } from "./component/characters/characters.component";
import { CharacterInfoComponent } from "./component/character-info/character-info.component";
import { ComicsComponent } from "./component/comics/comics.component";
import { ComicInfoComponent } from "./component/comic-info/comic-info.component";
import { SearchComponent } from "./component/search/search.component";


export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'search/:query', component: SearchComponent },
    { path: 'character-info/:id', component: CharacterInfoComponent },
    { path: 'comics', component: ComicsComponent },
    { path: 'comic-info/:id', component: ComicInfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];