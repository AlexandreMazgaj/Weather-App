import { Component } from '@angular/core';
import { WeatherInfo } from './weatherInfo';
import { WeatherSearchService } from './weatherSearch.service';

import { FrontPageComponent } from './frontPage.component';




@Component({
  selector: 'app-root',
  template :`
        <front_page></front_page>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherSearchService]

})
export class AppComponent {
  title = 'Weather Application';
}
