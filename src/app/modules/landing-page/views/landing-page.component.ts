import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
    transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('1000ms', style({ opacity: 1, transform: 'translateY(920px)' })),
  ]),
  transition(':leave', [
    animate('1000ms', style({ opacity: 0, transform: 'translateY(1000px)' })),
  ]),
]),

  trigger('fadeSlideInOutLuz', [
  transition(':enter', [
  style({ opacity: 0,  }),
  animate('7000ms', style({ opacity: 1, })),
  ]),
  transition(':leave', [
  animate('2000ms', style({ opacity: 0,  })),
  ]),
]),
trigger('fadeSlideInOutBola', [
  transition(':enter', [
  style({ opacity: 0,  }),
  animate('10000ms', style({ opacity: 1, })),
  ]),
  transition(':leave', [
  animate('9000ms', style({ opacity: 0,  })),
  ]),
]),
],

})
export class LandingPageComponent implements OnInit, AfterViewInit{

  showLuz = true;
  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    //this.acenderLuz()
    
  }


ngAfterViewInit(): void {
  setTimeout(this.acenderLuz, 1200);
  setTimeout(this.acenderBola, 3200);
 
}

acenderLuz(){
  document.getElementById('ima').style.visibility = "visible";
}

acenderBola(){
  document.getElementById('bola').style.visibility = "visible";
}
  
}
