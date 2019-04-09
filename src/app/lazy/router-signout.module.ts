import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdCommonSignoutPageHomeComponent, MdCommonSignoutPagesModule} from '@md-app/md-common-signout-pages';

@NgModule({
  declarations: [],
  imports: [
    MdCommonSignoutPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdCommonSignoutPageHomeComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterSignoutModule { }
