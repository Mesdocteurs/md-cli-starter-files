import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

// MdPatientQuestionDetailResolver,
import {MdQuestionDetailResolver} from '@md-app/md-core';
import {
  MdPatientUiComponentsModule,
  MdPatientUiNavbarComponent,
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

import {
  MdPatientDebriefingPageDetailComponent,
  MdPatientDebriefingPagesModule
} from '@md-app/md-patient-debriefing-pages';
import {MdPatientAbsencePageDetailComponent, MdPatientAbsencePagesModule} from '@md-app/md-patient-absence-pages';


@NgModule({
  declarations: [],
  imports: [
    MdPatientQuestionPagesModule,
    MdPatientPrescriptionsPagesModule,
    MdPatientDebriefingPagesModule,
    MdPatientUiComponentsModule,
    MdPatientAbsencePagesModule,
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
          },
          {
            path: ':id/compte-rendu',
            component: MdPatientDebriefingPageDetailComponent,
            resolve: {
              question: MdQuestionDetailResolver
            }
          },
          {
            path: ':id/absence',
            component: MdPatientAbsencePageDetailComponent,
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
