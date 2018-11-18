import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() totalList:number;
  @Input() textInfo:Object;
  @Input() detectScrollDown;
  @Output() toggleEnable: EventEmitter<any> = new EventEmitter();
  @Output() toggleScroll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggleEnableEmit(event) {
    this.toggleEnable.emit(event);
  }
  toggleScrollEmit(event) {
    this.toggleScroll.emit(event);
  }
  ngOnInit() {
  }

}
