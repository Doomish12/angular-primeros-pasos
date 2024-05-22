import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

uuid()

import { Personajes } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class Dbzervice {

  public personajes: Personajes[] = [
    {
      id: uuid(),
      name: 'Krillin',
      poder: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      poder: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      poder: 7500,
    }];

    addNuevoPersonajePadre( personaje: Personajes): void {

      const newPersonaje: Personajes = {id:uuid(), ...personaje};

      this.personajes.push(newPersonaje);
    }

    // onDeletePersonajePadre(index:number){
    //   this.personajes.splice(index, 1);
    // }

    deletePersonajeById( id:string ){
      this.personajes = this.personajes.filter( personaje => personaje.id !== id);
    }

}
