import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss']
})
export class SolarSystemComponent implements OnInit {
  
  config: any = {
    items: ["Amazon gggg gggg gg","Zid","Amazon","Noon","Salla","Amazon","Noon","Salla"],
    radius: 320,
    borderColor: '#ff1234',
    itemsColor: '#111212',
    itemsCardColor:'grey',
    directionClockwise:false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
