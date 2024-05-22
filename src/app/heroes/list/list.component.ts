import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: String;


  removeHeroe():void{
   this.deletedHero = this.heroNames.pop();
  }




}