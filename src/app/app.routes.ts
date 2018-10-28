import { Routes } from '@angular/router';
import { CharactersComponent } from "./component/characters/characters.component";
import { CharacterInfoComponent } from "./component/character-info/character-info.component";


export const ROUTES: Routes = [

    { path: 'characters', component: CharactersComponent },
    { path: 'character-info/:id', component: CharacterInfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'characters' },
    { path: '', pathMatch: 'full', redirectTo: 'characters' }
];