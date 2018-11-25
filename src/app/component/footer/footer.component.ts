import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() offset: number;
  @Input() totalList: number;
  @Input() totalResults: number;
  @Input() countList: number;
  @Input() detectScrollDown: number;
  @Output() togglePages: EventEmitter<any> = new EventEmitter;
  @Input() links: object = {
    character: '',
    comic: '',
    web: '',
    github: ''
  };
  constructor() {}
  showHideEmmiter() {
    this.togglePages.emit(event);
  }
  onActivate() {
    const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        (pos > 0) ? window.scrollTo(0, pos - 20) : window.clearInterval(scrollToTop);
    }, 0);
  }
  ngOnInit() {
  }
}
