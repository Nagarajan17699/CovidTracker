import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatareqService } from './datareq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countries: string[] = [];
  cvar: string;
  selectval: string;
  cdata = [];

  loaded = false;

  title = 'coronatrackingapp';
  total = null;
  constructor(private dataapi: DatareqService) { }


  ngOnInit() {
    this.dataapi.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  getData() {
    this.dataapi.getData(this.selectval).subscribe(data => {
      this.cdata = data;
      console.log(this.cdata);
      this.loaded = true;
    });
  }

  selectChangeHandler(event: any) {
    this.selectval = event.target.value;
    this.loaded = false;
  }

}


