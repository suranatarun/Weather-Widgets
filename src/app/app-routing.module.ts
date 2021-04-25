import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

const routes: Routes = [
  { path: 'weather-widget', component: WeatherWidgetComponent },
  { path: '', redirectTo: 'weather-widget', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
