import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { ActivatedRoute } from "@angular/router";
import { DataNotImageService } from "../../service/data-not-image.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchComic') inputEl:ElementRef;

  ngAfterViewInit() {
        setTimeout(() => this.inputEl.nativeElement.focus());
  }

  dataPeople:any[]=[];
  characterLink:string = 'comic-info';
  comicsList:any[]=[];
  linksSearch:object = {};

  isLoading:boolean; 

  constructor(private marvel:MarvelService, private Route:ActivatedRoute, private dataNotImage:DataNotImageService ) {
    this.onActivate(event);
  }

  initSearch(textSearch) {

    this.isLoading = true;

    setTimeout(()=>{
      if(textSearch!=='') {
        this.marvel.comicSearch(textSearch).subscribe((data:any)=>{
          this.isLoading = false;
          let searchResult = data.data.results;
          this.comicsList = searchResult;
          this.dataNotImage.deleteNotImageFound(this.comicsList);
          this.onActivate(event);
        })
      } else {
        this.isLoading = false;
      }
    }, 300);

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
      character: 'character',
      comic: 'comic',
      web: '',
      github: ''
    };
  }

}
