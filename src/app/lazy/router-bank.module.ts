import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdPatientBankPagesModule, MdPatientBankPageDetailComponent} from '@md-app/md-patient-bank-pages';
import {MdPatientUiFooterComponent, MdPatientUiLayoutComponent, MdPatientUiNavbarComponent} from '@md-app/md-patient-ui-components';

@NgModule({
  declarations: [],
  imports: [
    MdPatientBankPagesModule,
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
            component: MdPatientUiFooterComponent,
            outlet: 'footer'
          },
          {
            path: '',
            component: MdPatientBankPageDetailComponent,
            outlet: 'footer'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterBankModule { }
