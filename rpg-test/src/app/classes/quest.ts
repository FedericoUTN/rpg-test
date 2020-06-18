import { questItem, item } from './item';

export class quest {
    id : number;
    titulo : string;
    descripcion : string;
    isActivo : boolean = false;             //esta la mision activa ?
    requeriment : questItem[]       //array de objetos de quest necesarios
    state : estadoQuest
    lvlDifficult : number;
    rewards : {
        itemReward? : item[],
        moneyReward? : number,
        experienceReward? : number
    };

    toggleActivo() {
        this.isActivo = !this.isActivo
    }

}
export enum estadoQuest {
    inhactive,
    onProgress,
    Finished
}