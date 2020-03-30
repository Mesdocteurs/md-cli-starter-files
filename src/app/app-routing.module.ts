import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MdPatientAuthGuard, MdPatientTeleconseilGuard} from '@md-app/md-core';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('src/app/lazy/router-auth.module').then(m => m.RouterAuthModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('src/app/lazy/router-signin.module').then(m => m.RouterSigninModule)
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('src/app/lazy/router-signout.module').then(m => m.RouterSignoutModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('src/app/lazy/router-register.module').then(m => m.RouterRegisterModule)
  },
  {
    path: 'mot-de-passe-perdu',
    loadChildren: () => import('src/app/lazy/router-password-lost.module').then(m => m.RouterPasswordLostModule)
  },
  {
    path: 'profil', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-profile.module').then(m => m.RouterProfileModule)
  },
  {
    path: 'question', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-question.module').then(m => m.RouterQuestionModule)
  },
  {
    path: 'contact', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-contact.module').then(m => m.RouterContactModule)
  },
  {
    path: 'mes-coupons', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-coupons.module').then(m => m.RouterCouponsModule)
  },
  {
    path: 'mes-factures', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-invoices.module').then(m => m.RouterInvoicesModule)
  },
  {
    path: 'changer-mot-de-passe', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-password-change.module').then(m => m.RouterPasswordChangeModule)
  },
  {
    path: 'mon-compte', canActivate: [MdPatientAuthGuard, MdPatientTeleconseilGuard],
    loadChildren: () => import('src/app/lazy/router-account.module').then(m => m.RouterAccountModule)
  },
  {
    path: 'informations-bancaires', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-bank.module').then(m => m.RouterBankModule)
  },
  {
    path: 'documents-medicaux', canActivate: [MdPatientAuthGuard],
    loadChildren: () => import('src/app/lazy/router-documents.module').then(m => m.RouterDocumentsModule)
  },
  {
    path: '',
    redirectTo: '/deconnexion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
