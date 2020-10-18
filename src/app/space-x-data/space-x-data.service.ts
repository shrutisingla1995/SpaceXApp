import { Injectable } from '@angular/core';
import { SpaceXDataComponent } from './space-x-data.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpaceXDataService {
  constructor(private http: HttpClient) { }
  
  getData(endpoint){
      if(endpoint){
          return this.http.get('https://api.spaceXdata.com/v3/launches' + endpoint);
      }
  }
  yearsList(){
      return ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
  }
  successList(){
      return ['True','False']
  }


}
