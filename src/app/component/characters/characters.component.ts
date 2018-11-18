import { Component, OnInit, NgZone } from '@angular/core';
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
  totalMissing:number;
  characterLink:string = 'character-info';
  offsetCharacters:number = 0;
  count:number = 20;
  currentPage:number = 1;
  isEnabled: boolean = true;
  isScroll: boolean = true;
  isLoading:boolean = true;
  isScrolDown:boolean = true;
  lastScrollTop: number = 0;
  direction: string = "";
  scrollDownActive:boolean;

  textInfoBar = {
    infoTitle: 'Hide Characters without images',
    totalTitle: 'Total Characters'
  };

  linksCharacter:object = {};

  constructor( private marvel:MarvelService, private dataNotImage:DataNotImageService, lc: NgZone) {
    
    this.getCharacters(this.offsetCharacters, this.count);

    window.onscroll = () => {
      let st = window.pageYOffset;
      let dir = '';
      setTimeout(() => {
        if (st > this.lastScrollTop) {
            dir = "down";
            console.log(dir);
            this.scrollDownActive = true;
        } else {
            dir = "up";
            console.log(dir);
            this.scrollDownActive = false;
        }
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        });
      }, 400);
    };

  }

  initSearch(textSearch) {
    setTimeout(()=>{
      if(textSearch!=='') {
        this.marvel.characterSearch(textSearch).subscribe((data:any)=>{
          let searchResult = data.data.results;
          this.charactersList = searchResult;
          this.dataNotImage.deleteNotImageFound(this.charactersList);
          this.onActivate(event);
        })
      } 
    }, 300);
  }

  onScrollDownCharacters() {
    if(this.isScroll){
      this.offsetCharacters = this.offsetCharacters + 20;
      this.getCharacters(this.offsetCharacters, this.count);
      console.log(this.offsetCharacters);
    }
  }

  pageChange(event) {
    this.currentPage = event;
    let offsetCharacters = this.currentPage*10;
    this.getCharacters(offsetCharacters, this.count);
  }

  getCharacters(offsetCharacters, count) {
    this.isLoading = true;
    this.marvel.getCharacters(offsetCharacters, count).subscribe((data:any)=>{
        this.isLoading = false;
        let results = data.data.results;
        this.isScroll ? this.charactersList = this.charactersList.concat(results) : this.charactersList = results;
        this.total = data.data.total*2;
        this.totalView = data.data.total;
        this.totalMissing = this.totalView - this.offsetCharacters;
        this.isEnabled ? this.charactersList = this.dataNotImage.deleteNotImageFound(this.charactersList) : console.log('false');  
    })
  }

  toggleEnabledCharacters(event){
    this.isEnabled = !this.isEnabled;
    this.pageChange(this.currentPage);
  }

  toggleEnabledScrol(){
    this.isScroll = !this.isScroll;
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

  getMoreInfo(oageLink, id) {
    console.log(oageLink, id);
  }

  ngOnInit() {
    this.linksCharacter = { 
      character: '',
      comic: '',
      web: 'web',
      github: 'github'
    };
  }

}
