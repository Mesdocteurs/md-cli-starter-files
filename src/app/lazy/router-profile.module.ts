import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdPatientProfilePagesModule,
  MdPatientProfilePageDetailComponent,
  MdPatientProfilePageEditComponent
} from '@md-app/md-patient-profile-pages';

import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent
} from '@md-app/md-patient-ui-components';

@NgModule({
  declarations: [],
  imports: [
    MdPatientProfilePagesModule,
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
            component: MdPatientProfilePageDetailComponent,
            // pathMatch: 'full'
          }
        ]
      },
      {
        path: 'modifier',
        component: MdPatientProfilePageEditComponent,
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
  ]
})
export class RouterProfileModule { }
