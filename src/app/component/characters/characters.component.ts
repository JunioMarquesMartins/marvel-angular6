import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList:any[]=[];
  list:any[]=[];
  characterData:any[]=[];

  constructor( private marvel:MarvelService) {
    this.marvel.getCharacters(0, 20).subscribe((data:any)=>{
        this.charactersList = data.data.results;
        this.list = this.charactersList;
        this.deleteNotImageFound(this.charactersList);
    })
  }

  deleteNotImageFound(charactersList:any) {
    
    for(var i=0; i<=charactersList.length; i++) {
      let url = charactersList[i].thumbnail.path;
      let urlArray = url.split('/');
      let urlPop = urlArray.pop();
      if(urlPop  === 'image_not_available'){
        this.charactersList.splice(i,1);
        i --;
      }
    }

    // charactersList.forEach((element, index) => {
    //   let list = index;
    //   let url = element.thumbnail.path;
    //   let urlArray = url.split('/');
    //   let urlPop = urlArray.pop();
    //   if(urlPop  === 'image_not_available'){
    //     this.charactersList.splice(list,1);
    //     list = ;
    //   }
    // });
  }

  ngOnInit() {
  }

}
