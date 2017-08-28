export class WeatherInfo {
                              //I decided to create only one class and select the most important attributes from simplicity
                             
/*  temp : number;
  humidity : number;
  windSpeed : number;
  cloud : number;
  rain : number;
  snow : number;
  weatherGeneral : string;
  weatherDescription : string;
  weatherImage : string;*/

  constructor(public temp : number,
              public humidity : number,
              public windSpeed : number,
              public cloud : number,
              public weatherGeneral : string,
              public weatherDescription : string,
              public weatherImage : string,
              public dateTime : string,
              public city : string){}

}
