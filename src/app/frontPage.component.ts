import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector : 'front_page',
  templateUrl: 'frontPage.component.html',
  styleUrls: ['frontPage.component.css']
})

export class FrontPageComponent{

  constructor(private route : Router){}
}
