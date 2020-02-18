import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';

import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {MdCoreModule, MdHttpInterceptorService} from '@md-app/md-core';
import {MdPatientCoreModule} from '@md-app/md-patient-core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';

// @ts-ignore
import {version as versionPackage} from 'package.json';

import {MdStripeModule} from '@mesdocteurs/stripe';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: 'RGBA(38,52,68,0.8)',
      text: '#ffffff',
    },
    button: {
      background: '#FDC53B',
      text: '#ffffff'
    }
  },
  type: 'info',
  content: {
    message: 'Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.',
    dismiss: 'J\'accepte',
    link: 'En savoir +',
    href: 'https://www.mesdocteurs.com/cgu'
  }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdCoreModule,
    MdPatientCoreModule.forRoot({
      environment: environment.name,
      token: environment.partnerToken,
      version: versionPackage,
      oAuthUrl: environment.oauthUrl
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: 'production' === environment.name || 'preprod' === environment.name || 'recette' === environment.name
    }),
    NgcCookieConsentModule.forRoot(cookieConfig),
    MdStripeModule.forRoot(environment.stripeApiKey)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MdHttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
