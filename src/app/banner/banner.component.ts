import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //craete the instance of the data here
  //so we can pass some dynamic content also
  data: any;

  ngOnInit(): void {


  }

}
