import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css']
})
export class MarvelListComponent implements OnInit {

  @Input() dataList: any [] = [];

  constructor(private router: Router) { }

  getMoreInfo(id:number) {
    this.router.navigate([ 'character-info', id ])
  }

  ngOnInit() {
  }

}
