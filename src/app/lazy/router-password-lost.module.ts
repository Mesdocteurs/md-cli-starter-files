import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdCommonPasswordPageLostComponent, MdCommonPasswordPagesModule} from '@md-app/md-common-password-pages';

@NgModule({
  declarations: [],
  imports: [
    MdCommonPasswordPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdCommonPasswordPageLostComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterPasswordLostModule { }
