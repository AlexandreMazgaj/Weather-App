import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { WeatherSearchService } from './weatherSearch.service';
import { PresentationForecastComponent } from './presentation_forecast.component';
import { PresentationWeatherComponent } from './presentation_weather.component';
import { FrontPageComponent } from './frontPage.component';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentationForecastComponent,
    PresentationWeatherComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WeatherSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
