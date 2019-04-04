import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdQuestionDetailResolver} from '@md-app/md-core';
import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
  MdPatientUiFooterComponent,
  MdPatientUiLayoutComponent
} from '@md-app/md-patient-ui-components';

import {
  MdPatientQuestionPagesModule,
  MdPatientQuestionPageDetailComponent,
  MdPatientQuestionPageCreateComponent,
  MdPatientQuestionPageListComponent
} from '@md-app/md-patient-question-pages';

import {
  MdPatientPrescriptionsPageListComponent,
  MdPatientPrescriptionsPagesModule
} from '@md-app/md-patient-prescriptions-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientQuestionPagesModule,
    MdPatientPrescriptionsPagesModule,
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
            component: MdPatientQuestionPageListComponent,
          },
          {
            path: 'nouvelle',
            component: MdPatientQuestionPageCreateComponent,
          },
          {
            path: ':id/detail',
            component: MdPatientQuestionPageDetailComponent,
            resolve: {
              question: MdQuestionDetailResolver
            }
          },
          {
            path: ':id/mon-ordonnance',
            component: MdPatientPrescriptionsPageListComponent,
            resolve: {
              question: MdQuestionDetailResolver
            }
          }
        ]
      }
    ])
  ],
  exports: [
  ]
})
export class RouterQuestionModule { }
