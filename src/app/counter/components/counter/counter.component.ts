import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
<h3>Counter: {{counter}}</h3>

<button (click)="incrementarBy(+1)">+1</button>
<button (click)="resetear()">Reset</button>
<button (click)="incrementarBy(-1)">-1</button>

  `
})

export class CounterComponent  {

  public counter: number = 10;

  incrementarBy( value: number ):void {
    this.counter += value;
  }

  resetear( ):void {
    this.counter = 10;
  }

}
