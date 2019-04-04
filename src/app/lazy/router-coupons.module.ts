import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent
} from '@md-app/md-patient-ui-components';
import {MdPatientCouponsPageCheckComponent, MdPatientCouponsPagesModule} from '@md-app/md-patient-coupons-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientCouponsPagesModule,
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
            component: MdPatientCouponsPageCheckComponent,
            // pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterCouponsModule { }
