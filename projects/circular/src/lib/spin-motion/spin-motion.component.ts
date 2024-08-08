import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-spin-motion',
  templateUrl: './spin-motion.component.html',
  styleUrls: ['./spin-motion.component.css']
})
export class SpinMotionComponent implements OnInit {
  
   
  outerWidth:any;
  innerWidth:any;

  @Input() config: any = {
    items: ["Amazon","Zid","Amazon","Noon","Salla","Salla"],
    radius: 220,
    borderColor: 'red',
    itemsColor: 'black',
    itemsCardColor:'white',
    directionClockwise:false
  }

  constructor() { }
  ngOnInit(): void {
    this.calculatewidth()
  }
  getStyle(index: number): {[key: string]: string} {
    return {
      'background': this.config.itemsCardColor,
      'color': this.config.itemsColor,
      ...this.calculatePosition(index)
    };
  }
  calculatewidth(){
    this.outerWidth=2*this.config.radius;
    this.innerWidth=this.outerWidth-50;
  }
  calculatePosition(index: number): { top: string, left: string } {
    debugger
    const angle = (index / this.config.items.length) * 2 * Math.PI;
    const radius = this.config.radius;
    const top = (this.outerWidth/2-15) + radius * Math.sin(angle) - 20;
    const left =(this.outerWidth/2-15) + radius * Math.cos(angle) - 48;
    return { top: `${top}px`, left: `${left}px` };
  }

}
