import { Injectable } from '@angular/core';
import { Heroe, clases } from 'src/app/classes/heroe';
import { enemy } from 'src/app/classes/enemy';
import { item } from '../classes/item';


@Injectable({
  providedIn: 'root'
})
export class CombatIAService {
heroe : Heroe;
enemy : enemy[];
enemyCurrentID : number;
setArmor : item;
setWeapon : item;
turnos : number [];

  constructor() { }
  damageToEnemy(pow : number, malo : enemy):number{
    return (malo.armor - pow);
  }
  damageToHeroe(pow : number, bueno : Heroe):number{
    return (bueno.calcArmor(this.setArmor) - pow)
  }
  ataqueNormalEnemy(){
    console.log(this.heroe.name + ' ataco al enemigo')
  }
  ataqueNormalHeroe(id_enemy : number){
    console.log(this.enemy[id_enemy].name + ' ah atacado a ' + this.heroe.name )
  }
  estadoHP():string{
    return ('El heroe ' + this.heroe.name + '(' + this.heroe.hp + ')');   //el heroe XX (100)
  }
  textOnDamage(pow : number){
      console.log(' el daño a sido de ' + pow);
  };

  speedByClass(): number{     //velocidad base por clase
    let clase = this.heroe.class;
    switch(clase){
      case clases.mage :{
        return 20;
        break;
      }
      case clases.warrior :{
        return 25;
        break;
      }
      case clases.ranger :{
        return 30;
        break;
      }
      default :
      return 20;
      break;
    }
  }

  turnOrder(){      //calcular en un ciclo de 100, los turnos siguientes y los devuelve
    let heroSpeed = Math.floor(this.heroe.stats.agility / 4)  + this.speedByClass();
    let icHeroe = 0;
    let c = 0
    do{
      icHeroe += heroSpeed;
      if(icHeroe >= 100) {
        this.turnos.push(7);    //este 7 representa el turno del heroe
        icHeroe -= 100;
      };
      for (let i in this.enemy){
        this.enemy[i].IC += this.enemy[i].speed;
        if(this.enemy[i].IC >= 100) {
          this.turnos.push(Number(i));
          this.enemy[i].IC -= 100;
        };
      }
    }while(c < 100)
  }

  turno(){
    this.turnOrder();
    for (let t of this.turnos){
      if(t == 7){
        console.log('hero ataca');
      }
      else{
        console.log(this.enemy[t].name + ' a atacado al heroe')
      }  
    }
  }
    
    /*setTimeout(
      function(){this.damageToEnemy(5, this.enemy[0])}
      , 1000
    );
    setTimeout(
      function(){this.damageToHero(5, this.heroe)}
      , 1000
    )
  }*/
}
