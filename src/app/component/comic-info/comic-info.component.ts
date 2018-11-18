import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarvelService } from "../../service/marvel.service";

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.css']
})
export class ComicInfoComponent implements OnInit {

  comicData:any[]=[];
  dataImage:string;
  linksComic:object = {};
  id;

  constructor(private route:ActivatedRoute, private marvel:MarvelService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.marvel.getComicInfo(this.id).subscribe((data:any)=>{
      let dataResults = data.data.results[0];
      this.comicData = dataResults;
      (dataResults && dataResults.thumbnail) ? this.dataImage = `${dataResults.thumbnail.path}.${dataResults.thumbnail.extension}`: '';
      console.log(this.comicData);
    })
  }

  ngOnInit() {
    this.linksComic = { 
      character: 'character',
      comic: 'comic',
      web: '',
      github: ''
    };
  }

}
