import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdPatientBankPagesModule, MdPatientBankPageDetailComponent} from '@md-app/md-patient-bank-pages';
import {
  MdPatientUiComponentsModule,
  MdPatientUiLayoutComponent,
  MdPatientUiNavbarComponent
} from '@md-app/md-patient-ui-components';

@NgModule({
  declarations: [],
  imports: [
    MdPatientBankPagesModule,
    MdPatientUiComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdPatientUiLayoutComponent,
        children: [
          {
            path: '',
            component: MdPatientUiNavbarComponent,
            outlet: 'navbar'
          },
          {
            path: '',
            component: MdPatientBankPageDetailComponent
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterBankModule { }
