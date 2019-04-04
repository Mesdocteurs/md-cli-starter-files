import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MdPatientRegisterPagesModule, MdPatientRegisterPageHomeComponent} from '@md-app/md-patient-register-pages';

@NgModule({
  declarations: [],
  imports: [
    MdPatientRegisterPagesModule,
    RouterModule.forChild([
      {
        path: '',
        component: MdPatientRegisterPageHomeComponent,
      }
    ])
  ],
  exports: [
  ]
})
export class RouterRegisterModule { }
