import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdCommonPasswordPageChangeComponent,
  MdCommonPasswordPagesModule
} from '@md-app/md-common-password-pages';
import {
  MdPatientUiComponentsModule,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent,
  MdPatientUiNavbarComponent
} from '@md-app/md-patient-ui-components';

@NgModule({
  declarations: [],
  imports: [
    MdCommonPasswordPagesModule,
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
            component: MdCommonPasswordPageChangeComponent,
            // pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterPasswordChangeModule { }
