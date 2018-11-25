import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() pagesList: any [] = [];
  @Input() isOpen;
  @Input() pagesView;
  @Output() changePage: EventEmitter<any> = new EventEmitter();
  isOpenPages: boolean;
  constructor() {
    this.isOpenPages = true;
  }
  goComic(page) {
    this.changePage.emit(page);
  }

  ngOnInit() {
  }

}
