import { questItem, item } from './item';

export class Quest {
    constructor(public id : number, public titulo : string,public descripcion : string, public state : estadoQuest,
        public lvlDifficult : number,
        public isActivo : boolean = false){

    }
    requeriment : questItem;
    rewards : {
        itemReward? : item,
        moneyReward? : number,
        experienceReward? : number
    } = {};

    toggleActivo() {
        this.isActivo = !this.isActivo
    }
    fillRewards(item : item, money : number, expRew : number){
        this.rewards.itemReward = item
        this.rewards.moneyReward = money;
        this.rewards.experienceReward = expRew;
        console.log('premios llenados de la quest')
    }
    fillRequeriment(item : questItem){
        this.requeriment = item
        
    }

}
export enum estadoQuest {
    inhactive,
    onProgress,
    Finished
}