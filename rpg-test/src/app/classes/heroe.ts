import { item } from './item';


//clase base para cualquier heroe
export class Heroe {
    constructor(public id : number, public name : string, public clase : clases, public hp : number, public mp : number, public level : number, public experience : number, public state : estados, 
        public _str : number, public _vit : number, public _dex : number, public _agi : number, public _mag : number ){

           
            
         
    }
    
   
    public stats : {
        strength : number,
        vitality : number,
        dextery : number,
        agility : number,
        magic : number
    };
    private expReq : number;
    private skillSlot : number;
    get expRequerida (){
        return this.expReq
    }
     
            //cuanto slots de skills tiene disponible

    preLlenado(){           ///codigo de prueba
        this.expReq = this.calcExpReq(this.level);
        this.skillSlot = this.calcSkillSlot()

    }

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
    calcArmor(armadura : item):number{
        return Math.floor(this.stats.vitality / 3);
    }

}
export enum estados {
    good = 0,
    poisoned,
    cursed,
    stunned,
    dead
}
export enum clases {
    warrior = 0,
    ranger,
    mage
}