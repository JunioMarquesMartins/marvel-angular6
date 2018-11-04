import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { DataNotImageService } from "../../service/data-not-image.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  charactersList:any[]=[];
  total:number;
  totalView:number;

  offset:number = 0;
  count:number = 20;
  currentPage:number = 1;

  isEnabled: boolean = true;

  textInfoBar = {
    infoTitle: 'Hide Characters without images',
    totalTitle: 'Total Characters'
  };

  constructor( private marvel:MarvelService, private dataNotImage:DataNotImageService) {
    this.getCharacters(this.offset, this.count);
  }

  pageChange(event) {
    this.currentPage = event;
    let offset = this.currentPage*10;
    this.getCharacters(offset, this.count);
  }

  getCharacters(offset, count) {
    this.marvel.getCharacters(offset, count).subscribe((data:any)=>{
        this.charactersList = data.data.results;
        this.total = data.data.total*2;
        this.totalView = data.data.total;
        this.isEnabled ? this.charactersList = this.dataNotImage.deleteNotImageFound(this.charactersList) : console.log('false');  
    })
  }

  toggleEnabledCharacters(event){
    this.isEnabled = !this.isEnabled;
    this.pageChange(this.currentPage);
  }

  ngOnInit() {
  }

}
