import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.page.html',
  styleUrls: ['./provedores.page.scss'],
})
export class ProvedoresPage implements OnInit {
  showSearchField: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
