import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-motion',
  templateUrl: './circular-motion.component.html',
  styleUrls: ['./circular-motion.component.scss']
})
export class CircularMotionComponent implements OnInit {
  
  outerWidth:any;
  innerWidth:any;
 
  config: any = {
    items: ["Amazon","Zid","Amazon","Noon","Salla","Salla","antidisestablishmentarianism"],
    radius: 220,
    borderColor: 'red',
    itemsColor: 'black',
    itemsCardColor:'white',
    directionClockwise:false
  }
  ngOnInit(): void {
    this.calculatewidth()
  }
  constructor() { }

  calculatewidth(){
    this.outerWidth=2*this.config.radius;
    this.innerWidth=this.outerWidth-50;
  }
  getStyle(index: number): {[key: string]: string} {
    return {
      'background': this.config.itemsCardColor,
      'color': this.config.itemsColor,
      ...this.calculatePosition(index)
    };
  }
 
  /* calculatePosition(index: number): { top: string, left: string } {
    const angle = (index / this.names.length) * 2 * Math.PI;
    const radius = 220;
    const top = 200 + radius * Math.sin(angle) - 16;
    const left = 200 + radius * Math.cos(angle) - 48;
    return { top: `${top}px`, left: `${left}px` };
  }
  */
  calculatePosition(index: number): { top: string, left: string } {
    debugger
    const angle = (index / this.config.items.length) * 2 * Math.PI;
    const radius = this.config.radius;
    const top = (this.outerWidth/2-15) + radius * Math.sin(angle) - 20;
    const left =(this.outerWidth/2-15) + radius * Math.cos(angle) - 48;
    return { top: `${top}px`, left: `${left}px` };
  }
 

 


}
