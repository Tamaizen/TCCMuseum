import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { HomePage } from '../home/home';
import { ScanPage } from '../scan/scan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ScanPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
