import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  dataPeople:any[]=[];

  constructor(private marvel:MarvelService, private Route:ActivatedRoute ) {
    let queyName = this.Route.snapshot.paramMap.get('query');

    this.marvel.characterSerch(queyName).subscribe((data)=>{
      
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
