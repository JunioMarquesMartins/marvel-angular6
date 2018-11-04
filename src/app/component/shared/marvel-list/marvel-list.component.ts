import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css']
})
export class MarvelListComponent implements OnInit {

  @Input() dataList: any [] = [];
  @Input() pageLink: string;

  constructor(private router: Router) { }

  getMoreInfo(pageLink:string, id:number) {
    this.router.navigate([ pageLink, id ])
  }

  ngOnInit() {
  }

}
