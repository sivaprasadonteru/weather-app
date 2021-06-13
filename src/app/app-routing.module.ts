import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherDetailsComponent } from './weather-details/weather-details.component';



const routes: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'weather', component: WeatherDetailsComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
