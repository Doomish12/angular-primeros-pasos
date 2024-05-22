import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Input()
    public personajeList: Personajes[] = [{
      //! VALOR POR DEFECTO
      name: 'Trunks',
      poder: 10,
    }]

    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();


    onDeletePersonajeHijo(id?:string): void{
      if(!id) return;

      console.log({id})
      this.onDeleteId.emit(id);
    }

}
