import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MdPatientAuthGuard, MdPatientTeleconseilGuard} from '@md-app/md-core';

const routes: Routes = [
  { path: 'auth', loadChildren: './lazy/router-auth.module#RouterAuthModule'},
  { path: 'connexion', loadChildren: './lazy/router-signin.module#RouterSigninModule'},
  { path: 'deconnexion', loadChildren: './lazy/router-signout.module#RouterSignoutModule'},
  { path: 'inscription', loadChildren: './lazy/router-register.module#RouterRegisterModule'},
  { path: 'mot-de-passe-perdu', loadChildren: './lazy/router-password-lost.module#RouterPasswordLostModule'},
  { path: 'profil', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-profile.module#RouterProfileModule'},
  { path: 'question', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-question.module#RouterQuestionModule'},
  { path: 'contact', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-contact.module#RouterContactModule'},
  { path: 'mes-coupons', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-coupons.module#RouterCouponsModule'},
  { path: 'mes-factures', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-invoices.module#RouterInvoicesModule'},
  { path: 'changer-mot-de-passe', canActivate: [MdPatientAuthGuard],
    loadChildren: './lazy/router-password-change.module#RouterPasswordChangeModule'},
  { path: 'mon-compte', canActivate: [MdPatientAuthGuard, MdPatientTeleconseilGuard],
    loadChildren: './lazy/router-account.module#RouterAccountModule'},
  { path: 'informations-bancaires', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-bank.module#RouterBankModule'},
  { path: 'documents-medicaux', canActivate: [MdPatientAuthGuard], loadChildren: './lazy/router-documents.module#RouterDocumentsModule'},
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
