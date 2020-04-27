import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatareqService {

  constructor(private http: HttpClient) { }

  // if HttpClient Not injectable error occurs then import HttpClientModule in the AppModule

  /*
  The Below Function is to get the list of countries for the dropdown
  */

  getCountries() {
    const reqArr: string[] = [];
    return this.http.get('https://api.covid19api.com/countries')
      .pipe(
        map(reqData => {

          for (const key in reqData) {
            if (reqData.hasOwnProperty(key)) {
              reqArr.push(reqData[key].Slug);
            }
          }
          return reqArr.sort();
        })
      );
  }

  /*
  The below function is to get the data of the respected country passed as an attribute 'ctry'
  it returns an observable
  */

  getData(ctry: string) {
    const country = ctry;
    const reqData: any[] = [];
    const url = 'https://api.covid19api.com/total/country/' + country;
    console.log(url);
    return this.http.get(url)
      .pipe(
        map(Data => {
          for (const key in Data) {
            if (Data.hasOwnProperty(key)) {
              // tslint:disable-next-line: max-line-length
              reqData.push( {date: Data[key].Date.split('T', 1), Confirmed: Data[key].Confirmed, deaths: Data[key].Deaths, recovered: Data[key].Recovered});
              /* In the above line the date is split usinf 'T' as a identifer and 1 represents the first part of the split function */
            }
          }
          return reqData.sort();
        })
      );
  }
}
