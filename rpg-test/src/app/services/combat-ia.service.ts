import { Injectable } from '@angular/core';
import { Heroe, clases, estados } from 'src/app/classes/heroe';
import { Enemy } from 'src/app/classes/enemy';
import { item } from '../classes/item';


@Injectable({
  providedIn: 'root'
})
export class CombatIAService {
heroe : Heroe;
enemy : Enemy[] = [];
enemyCurrentID : number;
setArmor : item;
setWeapon : item;
turnos : number [] = [];

  constructor() {
    this.heroe = new Heroe(1, 'pepe', clases.warrior, 120, 40, 1, 0, estados.good,
    12, 10, 8, 4, 6)
    this.heroe.preLlenado()
   }
  damageToEnemy(pow : number, malo : Enemy):number{
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
    let clase = this.heroe.clase;
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
    let heroSpeed = Math.floor(this.heroe._agi / 4)  + this.speedByClass();
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
    }while(this.turnos.length < 20)
  }

  turno(){
    /*this.heroe = new Heroe(1, 'pepe', clases.warrior, 120, 40, 1, 0, estados.good,
    12, 10, 8, 4, 6)*/
    this.heroe.preLlenado()
    let enemy1 : Enemy = new Enemy()
    let enemy2 : Enemy = new Enemy()
    enemy1.preLlenado();
    enemy2.preLlenado();
    this.enemy.push(enemy1) 
    this.enemy.push(enemy2)
    this.turnOrder();
    for (let t of this.turnos){
      if(t == 7){
        console.log('El hero ' + this.heroe.name + ' ataca');
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



/*
    id : 1,
    name : 'pedro',
    class : clases.warrior,
    hp : 120,
    mp : 40,
    experience : 0,
    level : 2,
    stats : {
      strength : 10,
      vitality : 10,
      dextery : 6,
      agility : 8,
      magic : 4
    }*/
    

  }

