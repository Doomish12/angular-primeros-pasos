import { Component } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interface';
import { Dbzervice } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html'
})

export class MainPageComponent  {

  constructor( private dbzService: Dbzervice ){
  }

  get personajes():Personajes[] {
    return [...this.dbzService.personajes];
  }

  onDeletePersonaje( id: string):void{
    this.dbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje: Personajes):void{
    this.dbzService.addNuevoPersonajePadre(personaje);
  }

}
