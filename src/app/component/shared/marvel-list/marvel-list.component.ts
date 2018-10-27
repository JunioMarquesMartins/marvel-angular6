import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.css']
})
export class MarvelListComponent implements OnInit {

  @Input() dataList: any [] = [];

  constructor() { }

  ngOnInit() {
  }

}
