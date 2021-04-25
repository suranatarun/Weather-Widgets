import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  constructor(private server: ServerService) { }
  WeatherForm: FormGroup;
  city: any;
  WeatherData: any;


  public InitializationForm(): any {
    this.WeatherForm = new FormGroup ({
      city: new FormControl(['', Validators.minLength, Validators.maxLength])
    });
  }

  ngOnInit(): any {
    this.InitializationForm();
  }

  public FetchWeatherData(): any {
    const cityName = this.WeatherForm.value.city;
    console.log(cityName);
    this.server.FetchWeatherData(cityName).subscribe((data) => {
      this.WeatherData = data;
      console.log(this.WeatherData);
    });
  }
}
