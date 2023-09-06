import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeEsUY  from "@angular/common/locales/es-UY";
import localeFrCA  from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsUY);
registerLocaleData(localeFrCA);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-UY'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
