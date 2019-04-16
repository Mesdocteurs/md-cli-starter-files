import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {TestComponent} from './test/test.component';

const routes: Routes = [
  // { path: ':id', component: TestComponent},
  // { path: '', component: TestComponent},
  { path: 'auth', loadChildren: './lazy/router-auth.module#RouterAuthModule'},
  { path: 'connexion', loadChildren: './lazy/router-signin.module#RouterSigninModule'},
  { path: 'deconnexion', loadChildren: './lazy/router-signout.module#RouterSignoutModule'},
  { path: 'inscription', loadChildren: './lazy/router-register.module#RouterRegisterModule'},
  { path: 'profil', loadChildren: './lazy/router-profile.module#RouterProfileModule'},
  { path: 'question', loadChildren: './lazy/router-question.module#RouterQuestionModule'},
  { path: 'contact', loadChildren: './lazy/router-contact.module#RouterContactModule'},
  { path: 'mes-coupons', loadChildren: './lazy/router-coupons.module#RouterCouponsModule'},
  { path: 'mes-factures', loadChildren: './lazy/router-invoices.module#RouterInvoicesModule'},
  { path: 'mot-de-passe-perdu', loadChildren: './lazy/router-password-lost.module#RouterPasswordLostModule'},
  { path: 'changer-mot-de-passe', loadChildren: './lazy/router-password-change.module#RouterPasswordChangeModule'},
  { path: 'mon-compte', loadChildren: './lazy/router-account.module#RouterAccountModule'},
  { path: 'informations-bancaires', loadChildren: './lazy/router-bank.module#RouterBankModule'},
  { path: 'documents-medicaux', loadChildren: './lazy/router-documents.module#RouterDocumentsModule'},
  { path: 'aide', loadChildren: './lazy/router-contact.module#RouterContactModule'},
  {
    path: '',
    redirectTo: '/connexion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
