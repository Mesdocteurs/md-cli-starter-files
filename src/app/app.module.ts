import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
// import {HTTP_INTERCEPTORS} from '@angular/common/http';
//
// import {HttpclientInterceptorService} from './services/httpclient-interceptor.service';

import {MdCoreModule, MdConfig} from '@md-app/md-core';
import {MdPatientCoreModule} from '@md-app/md-patient-core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdCoreModule,
    MdPatientCoreModule.forRoot({
      environment: 'YOUR_ENVIRONMENT_HERE',
      token: 'YOUR_TOKEN_HERE',
      version: require('package.json').version
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: 'production' === MdConfig.getEnvironmen() || 'preprod' === MdConfig.getEnvironment()
    }),
  ],
  providers: [
    // Title,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpclientInterceptorService,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
