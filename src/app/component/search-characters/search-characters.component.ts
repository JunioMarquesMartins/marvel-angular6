import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MarvelService } from '../../service/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { DataNotImageService } from '../../service/data-not-image.service';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css']
})
export class SearchCharactersComponent implements OnInit, AfterViewInit {

  @ViewChild('searchCharacters') inputEl: ElementRef;
  dataPeople: any[] = [];
  characterLink: string;
  comicsList: any[] = [];
  linksSearch: object = {};
  totalMissing: number;
  searchOffset: number;
  count: number;
  currentText: string;
  isLoading: boolean;
  isKeyup: boolean;
  searchHome: boolean;
  totalCharacters: number;
  isActiveSearch: boolean;
  characterHomeList: any [] = [];
  // Array local evite call in API Marvel
  dataSelected = [
    'Agents of Atlas', 'Alpha Flight', 'Ant-Man', 'Avengers',
    'Black Bolt', 'Black Panther', 'Blade', 'Ben Reilly',
    'Captain America', 'Captain Marvel',
    'Doctor Strange', 'Deadpool', 'Daredevil',
    'Exiles', 'Elektra',
    'Falcon',
    'Guardians of the Galaxy', 'Ghost Rider',
    'Hawkeye', 'Hulk',
    'Iron Man', 'Iron Fist', 'Iceman',
    'Jessica Jones',
    'karnak', 'kingpin', 'Korvac',
    'Luke Cage', 'Loki',
    'Magneto', 'Marvel', 'Moon Knight',
    'New Mutants', 'Nova', 'Nick Fury',
    'Punisher',
    'Quasar', 'Quicksilver',
    'Runaways', 'Rogue', 'Rocket',
    'Storm', 'Sentry', 'Spider-man',
    'Silver surf', 'Savage Wolverine',
    'Thanos', 'Thor',
    'Valkyrie', 'Venom',
    'X-men', 'X-force', 'X-23'
  ];
  resultSelect: any [] = [];
  cloneDataSelect: any [] = [];

  constructor(private marvel: MarvelService, private Route: ActivatedRoute, private dataNotImage: DataNotImageService) {
    const query = this.dataSelected[Math.floor(Math.random() * (this.dataSelected.length - 0)) + 0];
    this.initSearch(query, 3, 0, true, true);
    this.characterLink = 'character-info';
    this.searchOffset = 0;
    this.count = 10;
    this.isActiveSearch = false;
    this.onActivate();
  }

  filterItems = query => {
    this.isActiveSearch = true;
    this.cloneDataSelect = this.dataSelected;
    this.resultSelect = [];
    this.cloneDataSelect.filter( (el, index) => {
      (el.toLowerCase().indexOf(query.toLowerCase()) > -1)  ?
        this.resultSelect.push(el) :
        this.resultSelect.splice(index, 1);
    });
  }

  initSearch(textSearch, count, searchOffset, isKeyup, searchHome) {

    this.isLoading = true;
    this.isKeyup = isKeyup;
    this.currentText = textSearch;
    this.isLoading = true;

    this.marvel.characterSearch(textSearch, count, searchOffset).subscribe((data: any) => {
      this.isLoading = false;
      this.isKeyup ?
      (this.comicsList = [], searchOffset = 0, this.searchOffset = 0, this.onActivate() ) : console.log('no keyup');
      const searchResult = data.data.results;
      this.totalCharacters = data.data.total;
      this.totalMissing = this.totalCharacters - this.searchOffset;
      this.comicsList.length <= 0 ? this.comicsList = searchResult : this.comicsList = this.comicsList.concat(searchResult);
      this.dataNotImage.deleteNotImageFound(this.comicsList);
      this.searchHome = searchHome;
      searchHome ? this.populateCharacterHomeList(searchResult) : console.log('NO');
    });
  }

  populateCharacterHomeList (results) {
    results.forEach((element) => {
      const name = element.name;
      const nameSplit = name.split(' ');
      const nameResults = nameSplit[0];
      this.characterHomeList.push({
        name: nameResults,
        image: `${element.thumbnail.path}.${element.thumbnail.extension}`
      });
    });
  }

  onScrollDownSearchCharacter() {
    if (this.comicsList.length > 1) {
      this.searchOffset = this.searchOffset + 10;
      this.searchOffset < this.totalCharacters ?
      this.initSearch(this.currentText, this.count, this.searchOffset, false, false) :
      this.searchOffset = this.totalCharacters;
    }
  }

  onActivate() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
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
  ngAfterViewInit() {
    setTimeout(() => this.inputEl.nativeElement.focus());
  }

}
