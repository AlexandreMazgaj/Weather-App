import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PresentationWeatherComponent } from './presentation_weather.component';
import  { PresentationForecastComponent } from './presentation_forecast.component';
import { FrontPageComponent } from './frontpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontPage', pathMatch: 'full' },   //when the app starts, it goes directly to the front page
  { path: 'presentationWeather',  component: PresentationWeatherComponent },
  { path: 'presentationForecast', component: PresentationForecastComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
