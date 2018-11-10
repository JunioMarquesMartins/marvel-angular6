import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { DataNotImageService } from "../../service/data-not-image.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comicsList:any[]=[];
  total:number;
  totalView:number;

  comicLink:string = 'comic-info'

  offset:number = 0;
  count:number = 20;
  currentPage:number = 1;

  imagesIsEnabled: boolean = true;
  isScroll: boolean = true;
  isLoading:boolean = true;

  textInfoBar = {
    infoTitle: 'Hide Comics without images',
    totalTitle: 'Total Comics'
  };

  constructor(private marvel:MarvelService, private dataNotImage:DataNotImageService) {
    this.getComics(this.offset, this.count);
  }

  onScrollDown() {
    if(this.isScroll){
      this.offset = this.offset + 20;
      this.getComics(this.offset, this.count);
    }
  }

  pageChange(event) {
    this.currentPage = event;
    let offset = this.currentPage*10;
    this.getComics(offset, this.count);
  }

  getComics(offset, count) {
    this.isLoading = true;
    this.marvel.getComics(offset, count).subscribe((data:any)=>{
        this.isLoading = false;
        let results = data.data.results;

        this.isScroll ? this.comicsList = this.comicsList.concat(results) : this.comicsList = results;
        this.total = data.data.total*2;
        this.totalView = data.data.total;
        this.imagesIsEnabled ? this.comicsList = this.dataNotImage.deleteNotImageFound(this.comicsList) : console.log('false');  
    })
  }

  toggleEnabledComics(event){
    this.imagesIsEnabled = !this.imagesIsEnabled;
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
