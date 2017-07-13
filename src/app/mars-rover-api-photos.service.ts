import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { marsApiKey } from './api-keys';

@Injectable()
export class MarsRoverAPIPhotos {

  constructor(
    private http: Http
  ) { }

  getByDateAndCamera(date: string, camera: string): Observable<any> {
    return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${marsApiKey}`);
  }
}
