import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  weatherArrayPanel: any =[];
  constructor(private weatherService:WeatherService) { }
  ngOnInit() {
   this.weatherArrayPanel = this.weatherService.fetchWeatherData();
  }
  getWeatherBasedOnCity(city, index){
    this.weatherService.getDataFromApi(city).subscribe(response => {
      if (response.main) {
        this.weatherArrayPanel[index].temperature = response.main.temp;
        this.weatherArrayPanel[index].icon = response.weather[0].icon;
        this.weatherArrayPanel[index].code = response.weather[0].id;
        this.weatherArrayPanel[index].humidity = response.main.humidity;

        this.weatherArrayPanel[index].isView = true;
      }
    }, error => {
    });
  }
  getBgColor(item){
    if(item.code >= 500 && item.code < 599){
      return 'assets/rain.jpg';
    } else if(item.code >= 600 && item.code < 700 ){
      return 'assets/winter.png'
    } else if (item.code >= 700 && item.code < 800) {
      return 'assets/sunny.jpg';
    } else {
      return 'assets/weather-nav.jpg';
    }

  }
}

