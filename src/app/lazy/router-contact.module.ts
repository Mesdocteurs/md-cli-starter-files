import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent
} from '@md-app/md-patient-ui-components';
import {MdPatientContactPageCreateComponent, MdPatientContactPagesModule} from '@md-app/md-patient-contact-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientContactPagesModule,
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
            component: MdPatientUiFooterComponent,
            outlet: 'footer'
          },
          {
            path: '',
            component: MdPatientContactPageCreateComponent,
            // pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterContactModule { }
