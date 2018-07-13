import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  cities=["Pune","Mumbai","Matheran","mahabaleshwar","rajasthan","kolkata"];

  startDate = new Date();
  EndDate=new Date();
  myname="";
  cityName="";
  Sdate="";
  Edate="";
}
