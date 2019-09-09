import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
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

import * as Sentry from '@sentry/browser';
import {MdStripeModule} from '@mesdocteurs/stripe';

Sentry.init({
  dsn: 'https://5629abcf845f43b6b9b0e5f4582d796d@sentry.io/1490591',
  environment: environment.name,
  enabled: environment.name !== 'local'
});

@Injectable({
  providedIn: 'root'
})
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    // dont show the report dialog
    // Sentry.showReportDialog({eventId});
  }
}

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
      version: versionPackage
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
    },
    {provide: ErrorHandler, useClass: environment.name === 'local' || environment.name === 'production' ? ErrorHandler : SentryErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
