import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdPatientAuthPageHomeComponent, MdPatientAuthPagesModule} from '@md-app/md-patient-auth-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientAuthPagesModule,
    RouterModule.forChild([
      {
        path: ':token',
        component: MdPatientAuthPageHomeComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterAuthModule { }
