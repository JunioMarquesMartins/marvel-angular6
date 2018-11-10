import { Component, OnInit } from '@angular/core';
import { MarvelService } from "../../service/marvel.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  forma:FormGroup;

  constructor(private marvel:MarvelService, private router: Router) { }

  onSubmit() {
    // event.preventDefault();
    this.router.navigate([ 'search', this.forma.value.queryName ])
    console.log(this.forma.value.queryName);
    
  }

  ngOnInit() {

    this.forma = new FormGroup({
      'queryName': new FormControl('')
    });

  }

}
