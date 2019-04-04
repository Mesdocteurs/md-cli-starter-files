import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdPatientSigninPageHomeComponent,
  MdPatientSigninPagesModule
} from '@md-app/md-patient-signin-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientSigninPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdPatientSigninPageHomeComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterSigninModule { }
