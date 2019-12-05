import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { intData } from 'src/assets/intData';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient)  {}
 url= "/assets/data/mockdata.json"

 getMockData():Observable<intData[]>{
   return this.http.get<intData[]>(this.url);
 }
  }

