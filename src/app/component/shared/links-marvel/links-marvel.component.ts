import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links-marvel',
  templateUrl: './links-marvel.component.html',
  styleUrls: ['./links-marvel.component.css']
})
export class LinksMarvelComponent implements OnInit {

  @Input() link;
  @Input() isInfoPage:boolean;

  constructor() { }

  ngOnInit() {
  }

}
