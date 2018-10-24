import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  template: `<div>LOADING...</div>`
})
export class RedirectComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.router.navigate([
    'CodeSheet',
    'FirstName',
    'LastName',
    '0',
    '0',
    '0',
    '0',
    '0'
    ]);
    //console.log("HOME")
  }

}
