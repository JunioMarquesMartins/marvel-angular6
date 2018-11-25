import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MarvelService } from '../../service/marvel.service';
import { DataNotImageService } from '../../service/data-not-image.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchComic') inputEl: ElementRef;

  dataPeople: any [] = [];
  characterLink: string;
  comicsList: any[] = [];
  comicsHomeList: any[] = [];
  linksSearchComic: object = {};
  totalMissing: number;
  isActiveSearch: boolean;
  // Array local evite call in API Marvel
  dataSelected = [
    'Agents of Atlas', 'Alpha Flight', 'Ant-Man', 'Avengers',
    'Battle', 'Black Bolt', 'Black Panther', 'Blade', 'Ben Reilly', 'Brilliant', 'Brute Force',
    'Captain America', 'Captain Marvel', 'Civil War',
    'Doctor Strange', 'Deadpool', 'Daredevil', 'Darth Vader',
    'Exiles', 'Extermination', 'Elektra',
    'Fantastic Four', 'Falcon',
    'Guardians of the Galaxy', 'Generation', 'Ghost Rider',
    'Hawkeye', 'Hulk',
    'Infinity Wars', 'Iron Man', 'Iron Fist', 'Iceman',
    'Jessica Jones', 'Journey Into Mystery',
    'Kanan', 'karnak', 'kick-ass', 'kingpin', 'Korvac',
    'Luke Cage', 'Lockjam', 'Loki', 'Lando',
    'Magneto', 'Marvel', 'Moon Knight', 'Mutant X',
    'New Mutants', 'Nova', 'Nick Fury',
    'Old man',
    'Peter Parker', 'Punisher', 'Powers',
    'Quasar', 'Quicksilver',
    'Runaways', 'Rogue', 'Rocket',
    'Storm', 'Sentry', 'Spider-man',
    'Star wars', 'Silver surf', 'Savage Wolverine', 'Secret Invasion', 'Secret Empire', 'Secret Avengers', 'Secret Warriors', 'Silk',
    'Tales of Suspense', 'Terror', 'Thanos', 'Thor',
    'Uncanny',
    'Vampire', 'Valkyrie', 'Vault of Spiders', 'Venom', 'Venomized', 'Victor Von Doom', 'Villains', 'Vision',
    'X-men', 'X-force', 'X-23'
  ];
  // Array from serve
  // dataSelected: any[] = [];
  resultSelect: any [] = [];
  cloneDataSelect: any [] = [];
  searchOffset: number;
  count: number;
  currentText: string;
  isLoading: boolean;
  isKeyup: boolean;
  totalComics: number;
  searchHome: boolean;

  constructor(private marvel: MarvelService, private dataNotImage: DataNotImageService, elementRef: ElementRef ) {
    const query = this.dataSelected[Math.floor(Math.random() * (this.dataSelected.length - 0)) + 0];
    this.initSearch(query, 5, 0, true, true);
    this.characterLink = 'comic-info';
    this.searchOffset = 0;
    this.count = 10;
    this.isActiveSearch = false;
    this.searchHome = true;
    this.onActivate();
  }

  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]>;
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // TODO array from serve
  // getComicsList (query: string) {
  //   setTimeout(() => {
  //     if (query.length > 0) {
  //       this.marvel.comicSearchTitleList(query, 10, 0).subscribe(( data: any ) => {
  //         this.isLoading = false;
  //         const results = data.data.results;
  //         this.populateDataSelected(query, results);
  //       });
  //     }
  //   }, 300);
  // }
  // populateDataSelected (query, results) {
  //   this.dataSelected = [];
  //   results.forEach((element) => {
  //     const title = element.title;
  //     const titleSplit = title.split(' ');
  //     const titleResults = titleSplit[0];
  //     this.dataSelected.push(titleResults);
  //     console.log(this.dataSelected);
  //   });
  //   setTimeout(() => {
  //     this.filterItems(query);
  //   }, 10);
  // }
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
    this.isKeyup = isKeyup;
    this.currentText = textSearch;
    this.isLoading = true;

    this.marvel.comicSearch(textSearch, count, searchOffset).subscribe(( data: any ) => {
      this.isLoading = false;
      this.isKeyup ?
      (this.comicsList = [], searchOffset = 0, this.searchOffset = 0, this.onActivate() ) : console.log('no keyup');
      const searchResult = data.data.results;
      this.totalComics = data.data.total;
      this.totalMissing = this.totalComics - this.searchOffset;
      this.comicsList.length <= 0 ? this.comicsList = searchResult : this.comicsList = this.comicsList.concat(searchResult);
      this.dataNotImage.deleteNotImageFound(this.comicsList);
      this.searchHome = searchHome;
      searchHome ? this.populateComicsHomeList(searchResult) : console.log('NO');
    });

    setTimeout(() => {
      this.isActiveSearch = false;
    }, 200);

  }
  populateComicsHomeList (results) {
    results.forEach((element) => {
      const title = element.title;
      const titleSplit = title.split(' ');
      const titleResults = titleSplit[0];
      this.comicsHomeList.push({
        title: titleResults,
        image: `${element.thumbnail.path}.${element.thumbnail.extension}`
      });
    });
  }
  onScrollDownSearchComic() {
    if (this.comicsList.length > 1 ) {
      this.searchOffset = this.searchOffset + 10;
      (this.searchOffset < this.totalComics && this.searchOffset !== this.totalComics) ?
      this.initSearch(this.currentText, this.count, this.searchOffset, false, false) :
      this.searchOffset = this.totalComics;
    }
  }
  onActivate() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        (pos > 0) ?  window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    }, 0);
  }

  ngAfterViewInit () {
    setTimeout(() => this.inputEl.nativeElement.focus());
  }

  ngOnInit() {
    this.linksSearchComic = {
      character: '',
      comic: 'Comics',
      comicHome: 'Comics',
      characterHome: ''
    };
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }

}
