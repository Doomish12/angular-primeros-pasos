import { Component, EventEmitter, Output } from '@angular/core';
import { Personajes } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();


  public personaje: Personajes = {
    name: '',
    poder: 0
  };

  emitPersonaje(): void{
    console.log(this.personaje);

    if(this.personaje.name.length === 0) return;

    this.onNuevoPersonaje.emit(this.personaje);

    this.personaje = {name:'', poder: 0};
  }

}
