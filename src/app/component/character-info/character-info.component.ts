import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  characterData:any[]=[];
  dataImage:string;
  id;

  isLoading:boolean;

  constructor(private route:ActivatedRoute, private marvel:MarvelService) {
    this.isLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.marvel.getCharacterInfo(this.id).subscribe((data:any)=>{
      this.isLoading = false;
      let dataResults = data.data.results;
      this.characterData = dataResults;
      (dataResults && dataResults[0].thumbnail) ? this.dataImage = `${dataResults[0].thumbnail.path}.${dataResults[0].thumbnail.extension}`: '';
      this.getComicsCharacter(this.id);
    })
    
  }

  getComicsCharacter(id) {
    this.isLoading = true;
    this.marvel.getCurrentComicsCharacter(id).subscribe((data:any)=>{
      this.isLoading = false;
      let currentComics = data.data.results;
      this.characterData.push(currentComics);
      console.log(this.characterData);
    })
  }

  ngOnInit() {
    
  }

}
