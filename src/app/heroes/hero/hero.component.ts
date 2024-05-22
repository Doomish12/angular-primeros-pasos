import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public edad:  number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }


  getHeroDescription():string {
    return `${this.name} -  ${this.edad}`;
  }

    changenHero():void{
      this.name = 'Spiderman';
    }

    changeEdad():void{
      this.edad = 25;
    }

    resetForm():void{
      this.name ='ironman';
      this.edad = 45;
    }

}
