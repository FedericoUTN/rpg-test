//clase base para cualquier heroe
export class heroe {
    id : number;
    name : string;
    class : clases;
    hp : number;
    mp : number;
    experience : number;
    level : number = 1;
    expReq : number = this.calcExpReq(this.level);
    stats : {
        strength : number,
        vitality : number,
        dextery : number,
        agility : number,
        magic : number
    };
    state : estados;
    skillSlot : number = this.calcSkillSlot() ;         //cuanto slots de skills tiene disponible

    calcSkillSlot(){            //devuelve cada 3 niveles, un slot mas, comienza en 1, los magos cada 2
        if(!clases.mage)
        { return 1 + Math.floor(this.level / 3); }
        if(clases.mage)
        { return 1 + Math.floor(this.level / 2); }
        
    }
    subirLvl(){
        if(this.experience >= this.calcExpReq(this.level)){
            this.level += 1;
        }
    }
    
    calcExpReq(lvl : number):number{        // 50, 150, 300, 500 , 750 , 1050 ...
        return (lvl * 25) * (1 + lvl) 
    }
    
    changeState(estado : estados){      //cambia al estado pasado por parametro
        this.state = estado
    }

}
export enum estados {
    good = 0,
    poisoned,
    cursed,
    stunned,
    dead
}
enum clases {
    warrior = 0,
    ranger,
    mage
}