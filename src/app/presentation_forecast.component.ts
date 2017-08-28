import { Component } from '@angular/core';
import { WeatherInfo } from './weatherInfo';
import { WeatherSearchService } from './weatherSearch.service';
import { OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { Units } from './units';
import { Languages } from './languages';


@Component({
	selector : 'presentationForecast',
	providers: [WeatherSearchService],
	templateUrl: 'presentation_forecast.component.html',
	styleUrls: ['presentation_forecast.component.css']
})


export class PresentationForecastComponent implements OnInit {

	testForm : boolean = true;

	testResult : boolean = false;        //variables to help display or not the form or the result page

	units = Units;
	languages = Languages;

	constructor(private searching : WeatherSearchService){}

  formulaire : FormGroup;

	infos : WeatherInfo[] = [];


	ngOnInit(){
		this.formulaire = new FormGroup({
			formCity : new FormControl(''),
			formUnit : new FormControl(''),
			formLang : new FormControl('')
		});
		this.testForm = true;
		this.testResult = false;
	}

  WhenSubmitted(): void{    //this function get the data from the json file and put them into the infos attribute of the component

		this.testForm = false;
		this.testResult = true;


		this.searching.searchByNameForecast(this.formulaire.value.formCity, this.formulaire.value.formUnit, this.formulaire.value.formLang).subscribe(
			(data) =>{
				for(let i=0; i<40; i+=1){
					const tmp = new WeatherInfo(data.list[i].main.temp,
																			data.list[i].main.humidity,
																			data.list[i].wind.speed,
																			data.list[i].clouds.all,
																			data.list[i].weather.main,
																			data.list[i].weather[0].description,
																			data.list[i].weather[0].icon,
																			data.list[i].dt_txt,
																			data.city.name);
					this.infos.push(tmp);
				}
			}
		);

}

backToForm(): void{   //this function help us go back to the form from the result page
  this.testForm = true;
  this.testResult = false;

  console.log(this.testForm);
}

}
