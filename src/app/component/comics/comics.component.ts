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

  offset:number = 0;
  count:number = 20;
  currentPage:number = 1;

  imagesIsEnabled: boolean = true;

  textInfoBar = {
    infoTitle: 'Hide Comics without images',
    totalTitle: 'Total Comics'
  };

  constructor(private marvel:MarvelService, private dataNotImage:DataNotImageService) {
    this.getComics(this.offset, this.count);
  }

  pageChange(event) {
    this.currentPage = event;
    let offset = this.currentPage*10;
    this.getComics(offset, this.count);
  }

  getComics(offset, count) {
    this.marvel.getComics(offset, count).subscribe((data:any)=>{
        this.comicsList = data.data.results;
        this.total = data.data.total*2;
        this.totalView = data.data.total;
        this.imagesIsEnabled ? this.comicsList = this.dataNotImage.deleteNotImageFound(this.comicsList) : console.log('false');  
    })
  }

  toggleEnabledComics(event){
    this.imagesIsEnabled = !this.imagesIsEnabled;
    this.pageChange(this.currentPage);
  }

  ngOnInit() {
  }

}
