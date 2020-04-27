/*
This Model is used to define the structure of the incoming data from API

API used : "https://www.covid19api.com"
*/


export interface Data {
    date: string[];
    Confirmed: number;
    death: number;
  }
