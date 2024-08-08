import { NgModule } from '@angular/core';
import { CircularComponent } from './circular.component';
import { SpinMotionComponent } from './spin-motion/spin-motion.component';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    CircularComponent,
    SpinMotionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CircularComponent,
    SpinMotionComponent
  ]
})
export class CircularModule { }
