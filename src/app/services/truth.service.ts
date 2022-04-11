import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TruthService {

  constructor(
    private http: HttpClient
  ) { }

  _url = "http://localhost:3000/truth/"

  getTruth(){
    return this.http.get<any>(this._url);
  }


}
