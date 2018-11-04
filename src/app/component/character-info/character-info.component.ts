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

  constructor(private route:ActivatedRoute, private marvel:MarvelService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.marvel.getCharacterInfo(this.id).subscribe((data:any)=>{
      let dataResults = data.data.results[0];
      this.characterData = dataResults;
      (dataResults && dataResults.thumbnail) ? this.dataImage = `${dataResults.thumbnail.path}.${dataResults.thumbnail.extension}`: '';
    })
  }

  ngOnInit() {
    
  }

}
