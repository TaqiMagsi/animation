import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-motion',
  templateUrl: './circular-motion.component.html',
  styleUrls: ['./circular-motion.component.scss']
})
export class CircularMotionComponent implements OnInit {
  

  names:Array<any>=["Amazon","Zid","Amazon","Noon","Salla","Salla"]
 

  constructor() { }

  calculatePosition(index: number): { top: string, left: string } {
    
    const angle = (index / this.names.length) * 2 * Math.PI;
    const radius = 220;
    const top = 200 + radius * Math.sin(angle) - 16;
    const left = 200 + radius * Math.cos(angle) - 48;
    return { top: `${top}px`, left: `${left}px` };
  }
  ngOnInit(): void {
  }




}
