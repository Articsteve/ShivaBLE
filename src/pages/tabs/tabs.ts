import { Component } from '@angular/core';

//import { HomePage } from '../home/home';
import { LandingpageComponent } from '../landingpage/landingpage';
import { DetailComponent } from '../details/details.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LandingpageComponent;
  tab2Root = DetailComponent;

  constructor() {

  }
}
