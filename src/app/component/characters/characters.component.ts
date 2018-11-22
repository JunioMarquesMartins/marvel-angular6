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

  textInfoBar = {
    infoTitle: 'Hide Characters without images',
    totalTitle: 'Total Characters'
  };

  linksCharacter: object = {};

  constructor( private marvel: MarvelService, private dataNotImage: DataNotImageService, lc: NgZone) {

    this.characterLink = 'character-info';
    this.offsetCharacters = 0;
    this.count = 20;
    this.currentPage = 1;
    this.isEnabled = true;
    this.isScroll = true;
    this.isLoading = true;
    this.isScrolDown = true;
    this.lastScrollTop = 0;
    this.direction = '';
    this.onActivate();
    this.getCharacters(this.offsetCharacters, this.count);

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
      this.offsetCharacters < this.totalView ? this.getCharacters(this.offsetCharacters, this.count) : this.offsetCharacters = 0;
    }
  }

  pageChange(event) {
    this.currentPage = event;
    const offsetCharacters = this.currentPage * 10;
    this.getCharacters(offsetCharacters, this.count);
  }

  getCharacters(offsetCharacters, count) {
    this.isLoading = true;
    this.marvel.getCharacters(offsetCharacters, count).subscribe(( data: any ) => {
        this.isLoading = false;
        const results = data.data.results;
        this.isScroll ? this.charactersList = this.charactersList.concat(results) : this.charactersList = results;
        this.total = data.data.total * 2;
        this.totalView = data.data.total;
        this.totalMissing = this.totalView - this.offsetCharacters;
        this.isEnabled ? this.charactersList = this.dataNotImage.deleteNotImageFound(this.charactersList) : console.log('false');
    });
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

  ngOnInit() {
    this.linksCharacter = {
      character: 'Characters',
      comic: '',
      characterHome: '',
      comicHome: ''
    };
  }

}
