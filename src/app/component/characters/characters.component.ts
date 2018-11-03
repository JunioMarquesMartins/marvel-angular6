import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList:any[]=[];
  total:number;

  offset:number = 0;
  count:number = 20;
  currentPage:number = 1;

  constructor( private marvel:MarvelService) {
    this.getCharacters(this.offset, this.count);
  }

  pageChange(event) {
    console.log(event);
    let offset = event*10;
    this.currentPage = event;
    this.getCharacters(offset, this.count);
  }

  getCharacters(offset, count) {
    this.marvel.getCharacters(offset, count).subscribe((data:any)=>{
        this.charactersList = data.data.results;
        this.total = data.data.total*2;
        this.deleteNotImageFound(this.charactersList);
    })
  }

  deleteNotImageFound(charactersList:any) {
    
    for(var i=0; i<=charactersList.length-1; i++) {
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
