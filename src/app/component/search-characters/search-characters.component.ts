import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { ActivatedRoute } from "@angular/router";
import { DataNotImageService } from "../../service/data-not-image.service";

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css']
})
export class SearchCharactersComponent implements OnInit {

  @ViewChild('searchCharacters') inputEl:ElementRef;

  ngAfterViewInit() {
    setTimeout(() => this.inputEl.nativeElement.focus());
  }

  dataPeople:any[]=[];
  characterLink:string = 'character-info';
  comicsList:any[]=[];
  linksSearch:object = {};
  totalMissing:number;

  searchOffset:number = 0;
  count:number = 10;
  currentText:string;

  isLoading:boolean;
  isKeyup:boolean;
  totalCharacters: number; 

  constructor(private marvel:MarvelService, private Route:ActivatedRoute, private dataNotImage:DataNotImageService) {
    this.onActivate(event);
  }


  initSearch(textSearch, count, searchOffset, isKeyup) {

    this.isLoading = true;

    this.isKeyup = isKeyup;
    this.currentText = textSearch;
    this.isLoading = true;

    this.marvel.characterSearch(textSearch, count, searchOffset).subscribe((data:any)=>{
      this.isLoading = false;
      this.isKeyup ? (this.comicsList = [], searchOffset=0, this.searchOffset = 0, this.onActivate(event) ) : console.log('no keyup');
      let searchResult = data.data.results;
      this.totalCharacters = data.data.total;
      this.totalMissing = this.totalCharacters - this.searchOffset;
      this.comicsList.length <= 0 ? this.comicsList = searchResult : this.comicsList = this.comicsList.concat(searchResult);
      this.dataNotImage.deleteNotImageFound(this.comicsList);
    })

  }

  onScrollDownSearchCharacter() {
    if(this.comicsList.length>1) {
      this.searchOffset = this.searchOffset + 10;
      this.searchOffset < this.totalCharacters ? this.initSearch(this.currentText, this.count, this.searchOffset, false) : this.searchOffset = this.totalCharacters;
    }
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
    this.linksSearch = { 
      character: 'Character',
      comic: '',
      comicHome: '',
      characterHome: 'Character'
    };
  }

}
