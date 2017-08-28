import { Component } from '@angular/core';
import { WeatherInfo } from './weatherInfo';
import { WeatherSearchService } from './weatherSearch.service';
import { OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Units } from './units';
import { Languages } from './languages';


@Component({
	selector : 'presentationWeather',
	providers: [WeatherSearchService],
	templateUrl: 'presentation_weather.component.html',
  styleUrls: ['presentation_weather.component.css']
})


export class PresentationWeatherComponent implements OnInit{
  testForm : boolean = true;

	testResult : boolean = false;   //variables to help display or not the form or the result page

	units = Units;
	languages = Languages;

	constructor(private searching : WeatherSearchService, private router : Router){}

  formulaire : FormGroup;

  info : WeatherInfo;

  ngOnInit(){
		this.formulaire = new FormGroup({   //on Initiation, it creates a ne form and display that form
			formCity : new FormControl(''),
			formUnit : new FormControl(''),
			formLang : new FormControl('')
		});
		this.testForm = true;
		this.testResult = false;
	}


  WhenSubmitted(): void{  //this function get the data from the json file and put them into the info attribute of the component

		this.testForm = false;
		this.testResult = true;

    this.searching.searchByNameWeather(this.formulaire.value.formCity, this.formulaire.value.formUnit, this.formulaire.value.formLang).subscribe(
      (data) => {
        this.info = new WeatherInfo(data.main.temp,
                                    data.main.humidity,
                                    data.wind.speed,
                                    data.clouds.all,
                                    data.weather[0].main,
                                    data.weather[0].description,
                                    data.weather[0].icon,
                                    data.dt,
                                    data.name
                                  );
      }
    );
  }


backToForm(): void{   //this function make us go back to the form from the result page
  this.testForm = true;
  this.testResult = false;   

  console.log(this.testForm);
}

goToForecast() : void{
  this.router.navigate(['/presentationForecast']);
}

}
