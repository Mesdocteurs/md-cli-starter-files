import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdCommonPasswordPageChangeComponent,
  MdCommonPasswordPagesModule
} from '@md-app/md-common-password-pages';

@NgModule({
  declarations: [],
  imports: [
    MdCommonPasswordPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdCommonPasswordPageChangeComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterPasswordChangeModule { }
