import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() offset:number;
  @Input() totalList:number;
  @Input() detectScrollDown:number;
  @Input() links:object = {
    character: '',
    comic: '',
    web: '',
    github: ''
  };

  constructor() { }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 0);
  }

  ngOnInit() {
  }

}
