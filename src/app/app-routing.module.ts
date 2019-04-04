import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {TestComponent} from './test/test.component';

const routes: Routes = [
  // { path: ':id', component: TestComponent},
  // { path: '', component: TestComponent},
  { path: 'connexion', loadChildren: './lazy/router-signin.module#RouterSigninModule'},
  { path: 'inscription', loadChildren: './lazy/router-register.module#RouterRegisterModule'},
  { path: 'profil', loadChildren: './lazy/router-profile.module#RouterProfileModule'},
  { path: 'question', loadChildren: './lazy/router-question.module#RouterQuestionModule'},
  { path: 'contact', loadChildren: './lazy/router-contact.module#RouterContactModule'},
  { path: 'mes-coupons', loadChildren: './lazy/router-coupons.module#RouterCouponsModule'},
  {
    path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  }
  // { path: 'mon-compte', loadChildren: './lazy/router-account.module#RouterAccountModule'},
  // { path: 'informations-bancaires', loadChildren: './lazy/router-bank.module#RouterBankModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
