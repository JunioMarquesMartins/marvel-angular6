import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  characterData:any[]=[];
  dataInfo:any[]=[];
  dataInfoList:any[]=[];
  dataImage:string;
  id;

  titleDataInfo:any [] = [];
  characterLink:string = 'character-info';
  isLoading:boolean;
  linksCharacter:object = {};

  constructor(private route:ActivatedRoute, private marvel:MarvelService) {
    this.isLoading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.marvel.getCharacterInfo(this.id).subscribe((data:any)=>{
      this.isLoading = false;
      let dataResults = data.data.results;
      this.characterData = dataResults;
      (dataResults && dataResults[0].thumbnail) ? this.dataImage = `${dataResults[0].thumbnail.path}.${dataResults[0].thumbnail.extension}`: '';
      //this.viewCharacterComic(this.characterData[0].comics.items[0].resourceURI);
      this.onActivate();
    })
    
  }

  getComicsCharacter() {
    let id = this.id;
    this.isLoading = true;
    this.titleDataInfo = [];
    this.marvel.getCurrentComicsCharacter(id).subscribe((data:any)=>{
      this.isLoading = false;
      let currentComics = data.data.results;
      this.dataInfoList = currentComics;
      console.log(this.dataInfoList);
      this.titleDataInfo.push('Comics with - ');
      this.scrollerToInfo('comics-scroll');
    })
  }
  getSeriesCharacter() {
    let id = this.id;
    this.isLoading = true;
    this.titleDataInfo = [];
    this.marvel.getCurrentSeriesCharacter(id).subscribe((data:any)=>{
      this.isLoading = false;
      let currentSeries = data.data.results;
      this.dataInfoList = currentSeries;
      // this.characterData.push(currentSeries);
      this.titleDataInfo.push('Series with - ');
      console.log(this.dataInfoList);
      this.scrollerToInfo('comics-scroll');
    })
  }

  viewCharacterSerie(url) {
    this.isLoading = true;
    this.marvel.getCharacterSerie(url).subscribe((data:any)=>{
      this.isLoading = false;
      this.dataInfo = data.data.results[0];
      this.scrollerToInfo('offsetScroll');
    })
  }

  viewCharacterComic(url) {
    this.isLoading = true;
    this.marvel.getCharacterComic(url).subscribe((data:any)=>{
      this.isLoading = false;
      this.dataInfo = data.data.results[0];
      this.scrollerToInfo('offsetScroll');
    })
  }
  
  scrollerToInfo(element) {
    let top = document.getElementById(element);
    setTimeout(()=>{
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }
    }, 300);
  }

  onActivate() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 0);
  }

  ngOnInit() {
    this.linksCharacter = { 
      character: 'characters',
      comic: 'comics',
      comicHome: 'comics',
      characterHome: 'characters'
    };
  }

}
