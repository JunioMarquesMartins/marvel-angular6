import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { MarvelService } from '../../service/marvel.service';
import { DataNotImageService } from '../../service/data-not-image.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, AfterViewInit {
  comicsList: any [] = [];
  pagesScrollList: any [] = [];
  total: number;
  totalView: number;
  totalMissing: number;
  comicLink: string;
  offset: number;
  countComics: number;
  count: number;
  currentPage: number;
  imagesIsEnabled: boolean;
  isScroll: boolean;
  isLoading: boolean;
  linksComic: object = {};
  isScrolDown: boolean;
  lastScrollTop: number;
  direction: string;
  scrollDownActive: boolean;
  isOpenPages: boolean;
  totalPagesSelected: number;
  textInfoBar = {
    infoTitle: 'Hide Comics without images',
    totalTitle: 'Total Comics'
  };
  constructor(private marvel: MarvelService, private dataNotImage: DataNotImageService, lc: NgZone) {
    this.count = 5;
    this.offset = Math.floor(Math.random() * (43000 - 1)) + 1;
    this.offset > 0 ? this.getComics(this.offset, this.count, false) : console.log(0);
    this.comicLink = 'comic-info';
    this.countComics = 0;
    this.currentPage = 1;
    this.imagesIsEnabled = true;
    this.isScroll = true;
    this.isLoading = true;
    this.linksComic = {};
    this.isScrolDown = true;
    this.lastScrollTop = 0;
    this.direction = '';
    this.isOpenPages = false;
    this.totalPagesSelected = 100;
    this.onActivate();
    this.calcPagesForScroll();
    window.onscroll = () => {
      const st = window.pageYOffset;
      let dir = '';
      setTimeout(() => {
        (st > this.lastScrollTop) ?
        (dir = 'down', this.scrollDownActive = true ) :
        (dir = 'up', this.scrollDownActive = false );
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        });
      }, 400);
    };
  }
  pageChange(event) {
    this.currentPage = event;
    const offset = this.currentPage * 10;
    this.getComics(offset, this.count, false);
  }
  getComics(offset, count, isSelected) {
    this.isLoading = true;
    this.marvel.getComics(offset, count).subscribe(( data: any ) => {
        this.isLoading = false;
        const results = data.data.results;
        (this.isScroll && isSelected) ?
        this.comicsList = this.comicsList.concat(results) :
        (this.comicsList = results, this.onActivate(), this.offset = offset);
        this.total = data.data.total * 2;
        this.totalView = data.data.total;
        this.totalMissing = this.totalView - this.offset;
        this.imagesIsEnabled ? this.comicsList = this.dataNotImage.deleteNotImageFound(this.comicsList) : console.log('false');
    });
  }
  updateDataComics(event) {
    this.isOpenPages = false;
    this.offset = event;
  }
  onScrollDown() {
    if (this.isScroll) {
      this.offset = this.offset + 5;
      this.offset < this.totalView ? this.getComics(this.offset, this.count, true) : this.offset = 0;
    }
  }
  toggleEnabledComics(event) {
    this.imagesIsEnabled = !this.imagesIsEnabled;
    this.pageChange(this.currentPage);
  }
  toggleEnabledScrol = event => this.isScroll = !this.isScroll;
  // Back scrollTop
  onActivate() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    }, 0);
  }
  calcPagesForScroll() {
    const numberPages = 43119 / 100;
    for ( let i = 0; i <= numberPages; i ++ ) {
      this.pagesScrollList.push(i);
    }
  }
  showHideSelectedPage() {
    this.isOpenPages = !this.isOpenPages;
  }
  ngOnInit() {
    this.linksComic = {
      character: '',
      comic: 'Comics',
      characterHome: '',
      comicHome: ''
    };
  }
  ngAfterViewInit () {
  }
}
