import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';

import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SearchComponent } from './search/search.component';
import { PopupWarningComponent } from './popup-warning/popup-warning.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MapComponent,
        InstructionsComponent,
        SearchComponent,
        PopupWarningComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        BrowserModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
