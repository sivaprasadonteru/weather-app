import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherArray: any = [
  {id: 'panel1', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel2', city: '', isView: true, temperature: null, humidity: null},
  {id: 'panel3', city: '', isView: true, temperature: null, humidity: null  },
  {id: 'panel4', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel5', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel6', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel7', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel8', city: '', isView: true, temperature: null, humidity: null },
  {id: 'panel9', city: '', isView: true, temperature: null, humidity: null }
];
  constructor(private http:HttpClient) { }

  fetchWeatherData(){
    return this.weatherArray;
  }
  getDataFromApi(city) : Observable<any> {
   return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0895e354ebb53818089f5a024d2d9b4e&units=metric`)
  }
}
