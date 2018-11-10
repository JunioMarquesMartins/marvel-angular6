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
  charactersScroll:any[]=[];

  total:number;
  totalView:number;

  characterLink:string = 'character-info';

  offset:number = 0;
  count:number = 20;
  currentPage:number = 1;

  isEnabled: boolean = true;
  isScroll: boolean = true;
  isLoading:boolean = true;

  textInfoBar = {
    infoTitle: 'Hide Characters without images',
    totalTitle: 'Total Characters'
  };

  constructor( private marvel:MarvelService, private dataNotImage:DataNotImageService) {
    this.getCharacters(this.offset, this.count);
  }

  onScrollDown() {
    if(this.isScroll){
      this.offset = this.offset + 20;
      this.getCharacters(this.offset, this.count);
    }
  }

  pageChange(event) {
    this.currentPage = event;
    let offset = this.currentPage*10;
    this.getCharacters(offset, this.count);
  }

  getCharacters(offset, count) {
    this.isLoading = true;
    this.marvel.getCharacters(offset, count).subscribe((data:any)=>{
        this.isLoading = false;
        let results = data.data.results;
        
        this.isScroll ? this.charactersList = this.charactersList.concat(results) : this.charactersList = results;

        this.total = data.data.total*2;
        this.totalView = data.data.total;
        this.isEnabled ? this.charactersList = this.dataNotImage.deleteNotImageFound(this.charactersList) : console.log('false');  
    })
  }

  toggleEnabledCharacters(event){
    this.isEnabled = !this.isEnabled;
    this.pageChange(this.currentPage);
  }
  
  toggleEnabledScrol(event){
    this.isScroll = !this.isScroll;
    console.log(this.isScroll);
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 0);
  }

  ngOnInit() {
  }

}
