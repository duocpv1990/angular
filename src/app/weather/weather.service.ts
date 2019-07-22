import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class WeatherService {
    results = null;


    constructor(private http: HttpClient) { }

    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=9fe9e01848838ed8731e11b9743df8dd&units=metric&q=' + cityName;
        return this.http.get(url);


    }
}