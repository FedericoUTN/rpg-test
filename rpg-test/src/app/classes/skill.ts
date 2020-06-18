import { heroe } from './heroe';


export class skill {
    id : number;
    name : string;
    mpUsed : number;        //cuanto mp usa
    slotUsad : number = 1;   //cuantos slot de memoria usa
    power : number;         //poder base del skill
    modifier : number;      //modificador del skill x stat
    level : number;         //es el nivel de skill
    maxLvl : number;        //nivel maximo del skill
    type : skillType;       
    effect? : effectType;      //efecto del skill

    canUseSkill(mp : number):boolean{           //devuelve true si puede usar skill
        if(mp > this.mpUsed){return true;}
        else return false;
    }
    calcPowerUP(stat : number){       //dependiendo de que atributo stat
        return this.power + (stat * this.modifier) + (this.level * this.power * 0.25)
    }
    lvlUp(){
        if(this.level <= this.maxLvl){
            this.level += 1;}
        }
}

export enum skillType {
    attack,
    defensive,
    heal,
    buff,
    debuff,
    pasive
}
export enum effectType{
    buffStat,
    poison,
    stun,
    curse,
    other
}