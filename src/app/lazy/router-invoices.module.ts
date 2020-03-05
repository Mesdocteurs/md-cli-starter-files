import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
  MdPatientUiLayoutComponent
} from '@md-app/md-patient-ui-components';
import {MdPatientInvoicesPageListComponent, MdPatientInvoicesPagesModule} from '@md-app/md-patient-invoices-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientInvoicesPagesModule,
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
            component: MdPatientInvoicesPageListComponent,
            // pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterInvoicesModule { }
