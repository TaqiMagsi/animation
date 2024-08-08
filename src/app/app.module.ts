import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircularMotionComponent } from './circular-motion/circular-motion.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { CircularModule } from 'circular';

@NgModule({
  declarations: [
    AppComponent,
    CircularMotionComponent,
    SolarSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CircularModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
