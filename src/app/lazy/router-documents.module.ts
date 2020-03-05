import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  MdPatientUiComponentsModule,
  MdPatientUiLayoutComponent,
  MdPatientUiNavbarComponent
} from '@md-app/md-patient-ui-components';
import {MdPatientDocumentsPageHomeComponent, MdPatientDocumentsPagesModule} from '@md-app/md-patient-documents-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientDocumentsPagesModule,
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
            component: MdPatientDocumentsPageHomeComponent,
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterDocumentsModule { }
