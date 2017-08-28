import { Component } from '@angular/core';
import { WeatherInfo } from './weatherInfo';

import { Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/Rx';


@Injectable()
export class WeatherSearchService {
  constructor(private http : Http){}

  searchByNameForecast(cityName : string, unit : string, language : string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=535e1960e80c589f07ca8d0de06e2931&units=${unit}&lang=${language}`).map((res : Response) => res.json());  //give back a json file from the api, it searches with the city name
  }

  searchByNameWeather(cityName : string, unit : string, language : string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=535e1960e80c589f07ca8d0de06e2931&units=${unit}&lang=${language}`).map((res : Response) => res.json()); //give back a json file from the api, it searches with the city name
  }


}
