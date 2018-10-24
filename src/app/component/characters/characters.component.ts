import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList:any[]=[];

  constructor( private marvel:MarvelService) {
    this.marvel.getCharacters(200, 10).subscribe((data:any)=>{
        this.charactersList = data.data.results;
        console.log(this.charactersList);
    })
  }

  ngOnInit() {
  }

}
