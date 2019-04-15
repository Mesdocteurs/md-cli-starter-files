import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MdPatientAccountPagesModule, MdPatientAccountPageHomeComponent} from '@md-app/md-patient-account-pages';
import {
  MdPatientUiComponentsModule,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent,
  MdPatientUiNavbarComponent
} from '@md-app/md-patient-ui-components';

@NgModule({
  declarations: [],
  imports: [
    MdPatientAccountPagesModule,
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
            component: MdPatientAccountPageHomeComponent,
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterAccountModule { }
