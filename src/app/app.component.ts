import { Component } from '@angular/core';
import { MyDataService } from "./my-data.service";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private api : MyDataService){
  }


}
