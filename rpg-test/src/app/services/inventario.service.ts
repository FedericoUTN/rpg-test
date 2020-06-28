import { Injectable } from '@angular/core';
import { item } from 'src/app/classes/item';
import { Heroe } from 'src/app/classes/heroe';
import { quest } from 'src/app/classes/quest';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  money : number = 0;
  equipo : item[];          //objetos en el inventario
  maxCap : number = 15;     //capacidad maximma de items en el inventario
  heroeActual : Heroe;
  misiones : quest[];       //misiones obtenidas 
  constructor() {
    
   }
   agregarDinero(gold : number){    //suma o resta oro
     this.money += gold;
   }
   agregarEquipo(obj : item){
     if(this.equipo.length < this.maxCap){
      this.equipo.push(obj);
     }
     
   }
}
