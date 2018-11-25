import { Component, OnInit, NgZone } from '@angular/core';
import { MarvelService } from '../../service/marvel.service';
import { DataNotImageService } from '../../service/data-not-image.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  charactersList: any [] = [];
  charactersScroll: any [] = [];
  pagesScrollList: any [] = [];
  total: number;
  totalView: number;
  totalMissing: number;
  characterLink: string;
  offsetCharacters: number;
  count: number;
  currentPage: number;
  isEnabled: boolean;
  isScroll: boolean;
  isLoading: boolean;
  isScrolDown: boolean;
  lastScrollTop: number;
  direction: string;
  scrollDownActive: boolean;
  isOpenPages: boolean;
  totalPagesSelected: number;
  textInfoBar = {
    infoTitle: 'Hide Characters without images',
    totalTitle: 'Total Characters'
  };
  linksCharacter: object = {};
  constructor( private marvel: MarvelService, private dataNotImage: DataNotImageService, lc: NgZone) {
    this.count = 10;
    this.offsetCharacters = Math.floor(Math.random() * (1400 - 0)) + 0;
    this.offsetCharacters > 0 ? this.getCharacters(this.offsetCharacters, this.count, false) : console.log(0);
    this.characterLink = 'character-info';
    this.currentPage = 1;
    this.isEnabled = true;
    this.isScroll = true;
    this.isLoading = true;
    this.isScrolDown = true;
    this.lastScrollTop = 0;
    this.direction = '';
    this.totalPagesSelected = 10;
    this.onActivate();
    this.calcPagesForScroll();
    window.onscroll = () => {
      const st = window.pageYOffset;
      let dir = '';
      setTimeout(() => {
        (st > this.lastScrollTop) ?
        (dir = 'down', this.scrollDownActive = true) :
        (dir = 'up', this.scrollDownActive = false);
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        });
      }, 400);
    };
  }

  onScrollDownCharacters() {
    if ( this.isScroll ) {
      this.offsetCharacters = this.offsetCharacters + 20;
      this.offsetCharacters < this.totalView ? this.getCharacters(this.offsetCharacters, this.count, true) : this.offsetCharacters = 0;
    }
  }

  pageChange(event) {
    this.currentPage = event;
    const offsetCharacters = this.currentPage * 10;
    this.getCharacters(offsetCharacters, this.count, false);
  }

  getCharacters(offsetCharacters, count, isSelected) {
    this.isLoading = true;
    this.marvel.getCharacters(offsetCharacters, count).subscribe(( data: any ) => {
        this.isLoading = false;
        const results = data.data.results;
        (this.isScroll && isSelected) ?
        this.charactersList = this.charactersList.concat(results) :
        (this.charactersList = results, this.onActivate(), this.offsetCharacters = offsetCharacters);
        this.total = data.data.total * 2;
        this.totalView = data.data.total;
        this.totalMissing = this.totalView - this.offsetCharacters;
        this.isEnabled ? this.charactersList = this.dataNotImage.deleteNotImageFound(this.charactersList) : console.log('false');
    });
  }
  updateDataComics(event) {
    this.isOpenPages = false;
    this.offsetCharacters = event;
  }

  toggleEnabledCharacters(event) {
    this.isEnabled = !this.isEnabled;
    this.pageChange(this.currentPage);
  }

  toggleEnabledScrol() {
    this.isScroll = !this.isScroll;
  }

  onActivate() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        (pos > 0) ?  window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    }, 0);
  }

  calcPagesForScroll() {
    const numberPages = 1400 / 10;
    for ( let i = 0; i <= numberPages; i ++ ) {
      this.pagesScrollList.push(i);
    }
  }
  showHideSelectedPage() {
    this.isOpenPages = !this.isOpenPages;
  }
  ngOnInit() {
    this.linksCharacter = {
      character: 'Characters',
      comic: '',
      characterHome: '',
      comicHome: ''
    };
  }

}
