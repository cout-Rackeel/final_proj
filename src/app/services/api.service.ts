import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url:string ="http://localhost:3000/prayers/";
  constructor(private http : HttpClient) { }

  postPrayer(data:any){
    return this.http.post<any>(this._url,data);
  }

  getPrayers(){
    return this.http.get<any>(this._url);
  }

  putPrayers(data:any,id:number){
    return this.http.put<any>(this._url+id , data);
  }

  deletePrayer(id:number){
    return this.http.delete<any>(this._url+id);
  }
}
