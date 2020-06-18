import { estados } from './heroe';

export class enemy {
    id : number;
    name : string;
    hp : number;
    mp : number;
    exp : number;       //esta es la experiencia que da al morir
    lvl : number;
    power : number;     //poder del enemigo
    armor : number;     //resistencia al daño
    rarity : rareza;
    state : estados = estados.good;
    changeState(estado : estados){      //cambia al estado pasado por parametro
        this.state = estado
    }

}
enum rareza {
    normal,
    raro,
    epico,
    jefe
}