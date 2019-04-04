import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdCoreModule} from '@md-app/md-core';
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
      environment: 'local',
      token: 'YOUR_TOKEN_HERE',
      version: '1.0.0'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
