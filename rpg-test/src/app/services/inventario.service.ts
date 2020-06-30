import { Injectable } from '@angular/core';
import { item, potion, itemRarity, potionType, weapon, weaponType } from 'src/app/classes/item';
import { Heroe } from 'src/app/classes/heroe';
import { quest } from 'src/app/classes/quest';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  money : number = 0;
  equipo : item[] = [];          //objetos en el inventario
  maxCap : number = 15;     //capacidad maximma de items en el inventario
  heroeActual : Heroe;
  misiones : quest[];       //misiones obtenidas 
  //division del inventario

   pocionHP : potion = {
    id : 101,
    name : 'heal Potion',
    description : 'pocion que cura',
    rarity : itemRarity.normal,
    imgURL : '',
    value : 100,
    power : 40,
    type : potionType.hpRegeneration,
    
  }
    

espada : weapon = {
  id : 102,
  name : 'Espada de acero',
  description : 'Arma basica de guerrero',
  rarity : itemRarity.normal,
  imgURL : '',
  value : 80,
  power : 12,
  upgradeLvl : 0,
  type : weaponType.sword
  
}
  constructor() {
    this.agregarEquipo(this.pocionHP)
    this.agregarEquipo(this.espada)
    
    
   }
   agregarDinero(gold : number){    //suma o resta oro
     this.money += gold;
   }
   agregarEquipo(obj : item){
     if(this.equipo.length < this.maxCap){
      this.equipo.push(obj);
     }
     
     
   }
   venderItem(id:  number){
   
      const index = this.equipo.findIndex((element) => element.id === id);
      console.log('es el ' + index)
      this.money += this.equipo[index].value
      this.equipo.splice(index, 1);
       }
}
