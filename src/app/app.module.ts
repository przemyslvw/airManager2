
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { MaterialModule } from 'src/app/material/material.module';
import { AngularFireModule } from 'angularfire2';
import { AppRoutnigModule } from './app-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlightsModule } from './flights/flights.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutnigModule,
    MaterialModule,
    AngularFireDatabaseModule,
    FlightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
