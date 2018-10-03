import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { listPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = listPage;
  tab2Root = AddPage;

  constructor() {

  }
}
