import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marvel-info',
  templateUrl: './marvel-info.component.html',
  styleUrls: ['./marvel-info.component.css']
})
export class MarvelInfoComponent implements OnInit {

  @Input() dataInfo:any[] = [];  

  constructor() { }

  ngOnInit() {
  }

}
